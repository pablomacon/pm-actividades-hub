# Hub de actividades interactivas — Profe Macón

Sitio estático que presenta las actividades de **Programación I** y
**Programación Avanzada** de 2026. Está pensado para que cada estudiante entre
con su cuenta de Google, vea únicamente las actividades que tiene habilitadas y
complete cuestionarios autocorregibles o entregas prácticas. La interfaz se
publica por separado del servicio de API y de la base de datos.

Este documento es la especificación de reconstrucción del proyecto tal como se
encuentra en la rama `main` en octubre de 2026. Incluye los componentes que
viven en este repositorio y los contratos mínimos del backend complementario
`backend-ejercicios`.

## Alcance y características

- Portada con acceso a los dos espacios curriculares.
- Hub autenticado por asignatura: solo lista actividades habilitadas para el
  estudiante y muestra su progreso.
- Cuestionarios de opción única, múltiple y texto, con dos intentos, corrección
  del lado del servidor y modo de revisión del mejor intento.
- Actividades de entrega con versiones sucesivas: código escrito, archivo o
  formularios abiertos, según la actividad.
- Encabezado y diseño responsivos compartidos, en español (Uruguay).
- La autorización real no depende del cliente: el backend valida el token de
  Google, la actividad y la habilitación del estudiante.

## Tecnologías y despliegue

El frontend no usa framework, empaquetador ni dependencias npm: son archivos
estáticos HTML, CSS y JavaScript ejecutados directamente por el navegador. Se
puede publicar en cualquier hosting estático que conserve las rutas de
directorios (en producción se contempla GitHub Pages, Cloudflare Pages y el
dominio `actividades.profemacon.net`).

La configuración actual está en `config.js`:

```js
window.APP_CONFIG = {
  apiBaseUrl: "https://backend-ejercicios-pm.vercel.app/api",
  googleClientId: "<ID de cliente OAuth web de Google>",
};
```

`shared/config.js` expone esta configuración como `window.PM_SHARED_CONFIG` y
cada curso o actividad la extiende con su asignatura o `activitySlug`. El ID de
cliente es público por naturaleza; no se deben colocar secretos, claves de
Drive ni cadenas de conexión en este repositorio.

Para desarrollo local basta servir la raíz con un servidor de archivos, por
ejemplo:

```powershell
python -m http.server 5500
```

Abrir `http://localhost:5500`. El origen elegido debe figurar tanto en los
orígenes autorizados del cliente OAuth de Google como en la lista CORS del
backend. Las rutas relativas hacen que el proyecto funcione tanto desde el
dominio raíz como desde un subdirectorio de GitHub Pages.

## Estructura del repositorio

```text
.
├── index.html, app.js, styles.css, config.js   # portada
├── header.js                                   # comportamiento visual compartido
├── assets/                                     # logotipos
├── shared/
│   ├── config.js                               # configuración común
│   ├── auth.js                                 # Google Identity + /auth/google
│   ├── results.js                              # guardado de intentos de quiz
│   └── course-hub.js                           # listado, progreso y cierre de sesión
└── 2026/
    ├── pi/                                    # Programación I
    │   ├── index.html, config.js
    │   ├── variables/01..03/
    │   ├── condicionales/01, 02, evaluacion-1, evaluacion-2/
    │   ├── iterativas/01..04/
    │   ├── arreglos/01..03/
    │   ├── arreglos-strings/01/               # entregas de práctica
    │   ├── metodos/01, 02/                    # quiz y entregas respectivamente
    │   └── poo/intro/                         # teoría y formularios de entrega
    └── pii/                                   # Programación Avanzada
        ├── index.html, config.js
        ├── analisisoo/01, 02/
        └── modelo/01, 02/
```

Una actividad tipo cuestionario contiene normalmente `index.html`, `app.js`,
`config.js`, `quiz-data.js` y, si necesita estilos propios, `styles.css`.
`quiz-data.js` define `window.QUIZ_DATA` con `slug`, título, puntaje y preguntas.
Cada pregunta tiene `numero`, `tipo` (`radio`, `checkbox` o `text`), enunciado,
opciones y puntaje. Las opciones correctas de este archivo sirven para diseñar
la actividad, pero la corrección de producción se realiza con las claves de la
base de datos, nunca confiando en el navegador.

Las actividades de práctica reutilizan componentes:

- `arreglos-strings/01` contiene el cliente genérico de entregas en `app.js`,
  sus estilos y el banco de ejercicios en `exercise-data.js`.
- `metodos/02` reutiliza ese cliente y esos estilos, pero provee su propio
  `exercise-data.js` y `config.js` (`activitySlug: "metodos-java-02"`).
- `poo/intro` es una actividad de teoría con tres formularios abiertos y su
  propio cliente, pues sus entregas son respuestas estructuradas y no archivos.

## Flujo de navegación y sesión

1. La portada enlaza a `2026/pi/` o `2026/pii/`.
2. El hub de curso carga Google Identity Services, obtiene un ID token y lo
   conserva durante la pestaña en `sessionStorage` bajo `pm_id_token`.
3. Envía `{ idToken, anio: 2026, asignatura }` a
   `POST /api/actividades/estudiante`.
4. El backend devuelve las actividades habilitadas. El cliente ordena por
   `fecha_creacion` descendente y luego por `id`, y construye las tarjetas.
5. En cuestionarios se muestran intentos y mejor porcentaje; con uno de dos
   intentos se ofrece continuar o ver el mejor, y con dos solo la revisión.
6. En actividades con entregas se muestra `Pendiente`, `En curso` o
   `Entregada` y el total realizado.
7. “Cerrar sesión” elimina el token de sesión y las claves locales heredadas,
   desactiva el selector automático de Google y vuelve a presentar el acceso.

Cada página de actividad vuelve a validar acceso con
`POST /api/auth/google`, enviando `{ idToken, slug }`. Esta respuesta contiene
los datos del estudiante y un `sessionToken` firmado para actividades de
entrega. Las sesiones de entrega se guardan con una clave aislada por actividad:
`pm_entregas_session_<activitySlug>`; por tanto una sesión no habilita otra
actividad.

## Cuestionarios autocorregibles

`app.js` de cada actividad renderiza las preguntas de `QUIZ_DATA`, impide
duplicar el envío en la misma página y pide confirmación si quedan respuestas
vacías. El envío sigue esta secuencia:

1. `POST /api/corregir` con `estudianteId`, `slug` y un mapa de respuestas.
2. El cliente calcula y muestra porcentaje y juicio: `Logrado` (>=76),
   `En proceso` (>=50) o `Inicial`.
3. `POST /api/intentos/guardar` persiste puntaje, juicio y respuestas.
4. El backend admite como máximo dos intentos por estudiante y actividad.

El enlace de revisión agrega `?modo=revision`. En ese modo no se puede enviar:
`POST /api/intentos/mejor` recupera el mejor intento (mayor porcentaje y, ante
empate, más reciente), marca las respuestas correctas o incorrectas y muestra
la clave guardada en el servidor.

## Entregas prácticas

### Arreglos, Strings y métodos

`arreglos-strings-01` usa un banco progresivo de ejercicios de Java. Cada
ejercicio solicita código y una explicación, y permite entregar texto o un
archivo (`zip`, `jpg`, `jpeg`, `png`, `txt` o `java`; máximo configurable,
actualmente 100 MiB). Los ejercicios se agrupan en bloques de diez.
`metodos-java-02` aplica el mismo mecanismo a veinte ejercicios de métodos:
`void`, parámetros, `return`, booleanos y ejercicios integradores.

El flujo de archivo es: iniciar subida, subir directamente a Google Drive con
la URL reanudable recibida y confirmar la subida. El servidor valida nombre,
tamaño, carpeta y archivo recibido antes de crear la entrega. El flujo de texto
crea la entrega de inmediato. Ambas modalidades crean una nueva versión en vez
de sobrescribir la anterior.

### Introducción a POO

`2026/pi/poo/intro/` es el cambio más reciente. Presenta teoría sobre problema,
abstracción, clases y objetos, atributos, métodos y encapsulamiento. Después
propone tres entregas:

1. Tabla de características posibles y necesarias para cliente de agencia,
   animal de zoológico, jugador de fútbol y vehículo.
2. La misma comparación para comportamientos y métodos.
3. Ocho preguntas abiertas de reflexión sobre abstracción, clases, objetos,
   atributos, métodos y `private`.

Todas las respuestas de un formulario son obligatorias. Puede reenviarse una
versión; la interfaz carga y exhibe la última versión por ejercicio. El hub
reconoce esta actividad como una entrega de tres partes y refleja su avance.

## Contrato del backend necesario

El backend de referencia vive en el repositorio hermano
`backend-ejercicios`, se ejecuta como funciones Node.js/Vercel y usa Neon
PostgreSQL, `google-auth-library` y `@neondatabase/serverless`.

| Ruta | Cuerpo principal | Responsabilidad |
| --- | --- | --- |
| `POST /api/auth/google` | `idToken`, `slug` | Verifica Google y autorización; devuelve estudiante y sesión firmada. |
| `POST /api/actividades/estudiante` | `idToken`, `anio`, `asignatura` | Devuelve actividades visibles, intentos y avance de entregas. |
| `POST /api/corregir` | `estudianteId`, `slug`, `respuestas` | Compara contra `preguntas` en BD y retorna puntaje. |
| `POST /api/intentos/guardar` | datos del intento y respuestas | Guarda hasta dos intentos y su detalle. |
| `POST /api/intentos/mejor` | `idToken`, `actividadSlug` | Recupera el mejor intento para revisión. |
| `POST /api/entregas` | `sessionToken`, `activitySlug`, `accion` | Consulta o guarda entregas de texto, archivo o formulario. |

Las acciones de `/api/entregas` son `estado`, `guardar-texto`,
`iniciar-upload`, `confirmar-upload`, `estado-formulario` y
`guardar-formulario`. El backend debe responder JSON con `ok` y `message` en
errores, aplicar CORS solo a los orígenes de la publicación y permitir `OPTIONS`.

Variables de entorno mínimas del backend:

```text
DATABASE_URL
GOOGLE_CLIENT_ID
STUDENT_SESSION_SECRET                 # o el secreto de cliente Drive como alternativa heredada
STUDENT_SESSION_SECONDS                # opcional; por defecto 12 horas
ENTREGAS_MAX_BYTES                     # opcional; por defecto 104857600
GOOGLE_DRIVE_CLIENT_ID                 # para entregas de archivos
GOOGLE_DRIVE_CLIENT_SECRET
GOOGLE_DRIVE_REFRESH_TOKEN
GOOGLE_DRIVE_ROOT_FOLDER_ID
```

Para Drive, el backend crea la jerarquía
`<raíz>/<actividad>/<grupo>/<apellido_nombre>/Bloque_XX`. Las actividades
actuales de archivos se alojan bajo `Ejercicios-arreglos-agosto` y
`Ejercicios-metodos-java`.

## Modelo de datos mínimo

Además de las tablas base `estudiantes`, `actividades` y `realiza`, la
reconstrucción necesita:

- `preguntas(actividad_slug, numero_pregunta, respuesta_correcta, ...)` para
  las claves de los cuestionarios.
- `intentos` y `respuestas_intento` para intentos, puntajes y revisión.
- `entregas_ejercicios`, `archivos_entrega` y `entregas_upload_pendientes`
  para el código y los archivos prácticos.
- `entregas_formularios` para respuestas JSONB de POO, con unicidad por
  estudiante, actividad, ejercicio y versión.

La actividad `poo-intro-01` debe estar registrada como activa para el año 2026,
asignatura `pi`, URL `/2026/pi/poo/intro/` y habilitada para los grupos `1mf`,
`1mg` y `profesor`. Su configuración de formularios admite los ejercicios 1 a
3 indicados arriba. Las migraciones exactas de referencia están en el proyecto
de backend, incluidas `20260830_entregas_arreglos_strings.sql`,
`20261005_metodos_java_02_entregas.sql` y `20261007_poo_intro_01.sql`.

## Crear una actividad nueva

1. Elegir un `activitySlug` permanente y crear el directorio bajo el curso y
   tema correspondientes.
2. Copiar la estructura de una actividad del mismo tipo y ajustar rutas
   relativas, título, `config.js` y contenido.
3. Para un cuestionario, definir `window.QUIZ_DATA`, cargar sus scripts en el
   orden `shared/config.js`, `config.js`, `quiz-data.js`, `shared/auth.js`,
   `shared/results.js`, `app.js`, y crear las respuestas correctas en la BD.
4. Para entregas de código, crear `exercise-data.js`, reutilizar el cliente de
   entregas y agregar el slug a `DELIVERY_SLUGS` del backend. Para un formulario,
   añadir también su validación declarativa a `FORM_CONFIG` y a
   `FORM_DELIVERY_SLUGS`.
5. Insertar la actividad en `actividades`, asociarla mediante `realiza` a los
   estudiantes o grupos autorizados y verificar que `url` sea una ruta absoluta
   desde la raíz del sitio (`/2026/.../`).
6. Probar autenticación, actividad sin permiso, un primer envío, reenvío,
   revisión o estado y la vista móvil antes de publicar.

## Cambios recientes incluidos

- Se agregó la actividad **Introducción a la POO en Java** (`poo-intro-01`) con
  teoría y tres entregas de formulario versionadas.
- El hub reconoce entregas y ahora las ordena por fecha de creación, mostrando
  su avance en lugar de tratarlas como cuestionarios de dos intentos.
- Las sesiones de actividades de entrega quedaron aisladas por slug para evitar
  que una sesión habilite otra actividad.
- Se incorporó la práctica de métodos Java y luego se separaron sus actividades
  de cuestionario (`metodos/01`) y entrega (`metodos/02`).
- Los ejercicios prácticos se agruparon en bloques, y se añadieron arreglos,
  recorridos, Strings, preguntas de salida y una variante adaptada de variables.

## Verificación antes de publicar

- Mantener `config.js` y `shared/config.js` consistentes.
- Comprobar que las rutas de cada `script`, `stylesheet`, logo y enlace de
  retorno sean válidas desde su profundidad de directorio.
- Revisar que el origen de producción esté autorizado en Google OAuth y CORS.
- Ejecutar las migraciones de backend antes de exponer una actividad nueva.
- No versionar archivos de configuración con secretos ni archivos temporales de
  despliegue; `.gitignore` ya excluye scripts SQL locales de claves y datos.

