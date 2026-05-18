window.QUIZ_DATA = {
  slug: "analisisoo-02",
  titulo: "Análisis y Diseño Orientado a Objetos – Actividad 2",
  puntajeTotal: 20,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado:
        "En un modelo conceptual, ¿cuál es el criterio principal para decidir si una clase debe aparecer en el diagrama?",
      opciones: [
        {
          valor: "a",
          texto:
            "Que pueda convertirse directamente en una tabla de base de datos.",
        },
        {
          valor: "b",
          texto:
            "Que represente un elemento relevante de la realidad del problema.",
        },
        { valor: "c", texto: "Que tenga al menos tres atributos." },
        { valor: "d", texto: "Que pueda programarse fácilmente en Java." },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado:
        "En un sistema de biblioteca, se modela que un Socio realiza Préstamos de Libros. Cada préstamo tiene fecha de inicio, fecha de devolución prevista y estado. ¿Cuál sería la decisión de modelado más adecuada?",
      opciones: [
        {
          valor: "a",
          texto: "Guardar fecha y estado como atributos de Socio.",
        },
        {
          valor: "b",
          texto: "Guardar fecha y estado como atributos de Libro.",
        },
        {
          valor: "c",
          texto:
            "Modelar Préstamo como clase, porque contiene información propia de la relación entre Socio y Libro.",
        },
        {
          valor: "d",
          texto:
            "Eliminar Libro del modelo porque ya aparece dentro del préstamo.",
        },
      ],
    },
    {
      numero: 3,
      tipo: "checkbox",
      enunciado:
        "Selecciona las afirmaciones correctas sobre las asociaciones en un diagrama de clases conceptual.",
      opciones: [
        {
          valor: "a",
          texto:
            "Representan relaciones relevantes entre objetos de las clases involucradas.",
        },
        {
          valor: "b",
          texto: "Siempre deben tener una flecha para indicar herencia.",
        },
        {
          valor: "c",
          texto:
            "Pueden existir varias asociaciones diferentes entre las mismas clases.",
        },
        {
          valor: "d",
          texto:
            "El nombre de la asociación ayuda a leer correctamente la relación.",
        },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado:
        "Si entre Persona y Auto aparecen dos asociaciones: “posee” y “conduce”, ¿por qué no alcanza con una sola línea entre ambas clases?",
      opciones: [
        {
          valor: "a",
          texto:
            "Porque UML obliga a dibujar siempre dos líneas entre Persona y Auto.",
        },
        {
          valor: "b",
          texto:
            "Porque poseer y conducir representan relaciones conceptualmente distintas.",
        },
        {
          valor: "c",
          texto: "Porque una asociación solo puede tener un atributo.",
        },
        { valor: "d", texto: "Porque Auto debería heredar de Persona." },
      ],
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado:
        "En un hospital, una Cama puede estar ocupada por cero o un Paciente, y un Paciente puede ocupar una sola Cama. ¿Qué problema podría requerir una restricción adicional?",
      opciones: [
        {
          valor: "a",
          texto:
            "Impedir que una misma cama sea ocupada por más de un paciente al mismo tiempo.",
        },
        {
          valor: "b",
          texto: "Permitir que un paciente ocupe varias camas simultáneamente.",
        },
        { valor: "c", texto: "Convertir Paciente en subclase de Cama." },
        {
          valor: "d",
          texto: "Eliminar la multiplicidad porque no aporta información.",
        },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado:
        "¿Cuándo conviene usar una restricción escrita entre llaves en un diagrama UML?",
      opciones: [
        {
          valor: "a",
          texto: "Siempre que haya una asociación entre dos clases.",
        },
        {
          valor: "b",
          texto:
            "Cuando el diagrama no logra expresar por sí solo una regla importante del problema.",
        },
        { valor: "c", texto: "Cuando se quiere reemplazar una multiplicidad." },
        {
          valor: "d",
          texto:
            "Cuando se desea indicar que una clase tiene muchos atributos.",
        },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado:
        "En un sistema de cursos, un Docente dicta un Curso, pero dentro de esa relación interesa registrar el año, el semestre y la carga horaria asignada. ¿Dónde conviene ubicar esos datos?",
      opciones: [
        {
          valor: "a",
          texto: "Como atributos de Docente, porque el docente dicta cursos.",
        },
        {
          valor: "b",
          texto: "Como atributos de Curso, porque el curso es dictado.",
        },
        {
          valor: "c",
          texto:
            "En una clase de asociación vinculada a la relación Docente–Curso.",
        },
        { valor: "d", texto: "En una clase abstracta llamada Año." },
      ],
    },
    {
      numero: 8,
      tipo: "checkbox",
      enunciado:
        "Selecciona los casos en los que podría tener sentido usar una clase de asociación.",
      opciones: [
        {
          valor: "a",
          texto:
            "Alumno se inscribe en Taller, y se debe guardar fecha de inscripción y estado de pago.",
        },
        { valor: "b", texto: "Persona tiene nombre y apellido." },
        {
          valor: "c",
          texto:
            "Producto es ofrecido por Proveedor, y se debe guardar precio pactado y fecha del acuerdo.",
        },
        { valor: "d", texto: "Perro tiene edad y raza." },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado:
        "En una autoasociación de la clase Persona llamada “supervisa”, ¿qué indican los roles “supervisor” y “supervisado”?",
      opciones: [
        {
          valor: "a",
          texto: "Que existen dos clases distintas: Supervisor y Supervisado.",
        },
        {
          valor: "b",
          texto:
            "Qué función cumple cada objeto Persona dentro de la misma relación.",
        },
        {
          valor: "c",
          texto:
            "Que la asociación debe transformarse obligatoriamente en herencia.",
        },
        { valor: "d", texto: "Que Persona es una clase abstracta." },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado:
        "¿Cuál de los siguientes ejemplos representa mejor una autoasociación?",
      opciones: [
        { valor: "a", texto: "Cliente compra Producto." },
        { valor: "b", texto: "Empleado supervisa a otro Empleado." },
        { valor: "c", texto: "Factura contiene DetalleFactura." },
        { valor: "d", texto: "Auto contiene Motor." },
      ],
    },
    {
      numero: 11,
      tipo: "radio",
      enunciado:
        "En un sistema académico, se propone que Estudiante herede de Grupo porque un estudiante pertenece a un grupo. ¿Cuál es el problema conceptual?",
      opciones: [
        {
          valor: "a",
          texto:
            "La herencia expresa una relación de tipo “ser”, no una relación de pertenencia.",
        },
        {
          valor: "b",
          texto: "La herencia solo puede usarse con clases abstractas.",
        },
        { valor: "c", texto: "Grupo debería tener menos atributos." },
        {
          valor: "d",
          texto:
            "Toda relación de pertenencia debe modelarse como composición.",
        },
      ],
    },
    {
      numero: 12,
      tipo: "radio",
      enunciado:
        "Si Profesor es superclase de Adscripto y Laboratorista, y Profesor trabaja en Liceo, ¿qué ocurre con esa asociación?",
      opciones: [
        {
          valor: "a",
          texto:
            "Debe repetirse obligatoriamente desde Adscripto y desde Laboratorista hacia Liceo.",
        },
        {
          valor: "b",
          texto:
            "Se hereda: Adscripto y Laboratorista también participan de la asociación.",
        },
        {
          valor: "c",
          texto:
            "Se elimina porque las subclases no pueden tener asociaciones.",
        },
        { valor: "d", texto: "Se convierte automáticamente en composición." },
      ],
    },
    {
      numero: 13,
      tipo: "checkbox",
      enunciado:
        "Selecciona las afirmaciones correctas sobre herencia en UML conceptual.",
      opciones: [
        {
          valor: "a",
          texto: "La herencia expresa una relación de tipo “ser”.",
        },
        {
          valor: "b",
          texto: "Las subclases heredan atributos de la clase base.",
        },
        {
          valor: "c",
          texto: "Las asociaciones de la superclase también se heredan.",
        },
        {
          valor: "d",
          texto:
            "Toda asociación entre clases debería reemplazarse por herencia.",
        },
      ],
    },
    {
      numero: 14,
      tipo: "radio",
      enunciado:
        "Un diagrama muestra Profesor asociado a Liceo, y además Adscripto asociado nuevamente a Liceo con la misma relación “trabaja en”. Si Adscripto hereda de Profesor, ¿qué problema aparece?",
      opciones: [
        {
          valor: "a",
          texto:
            "Aparece redundancia conceptual, porque la asociación ya fue heredada.",
        },
        {
          valor: "b",
          texto: "Aparece composición, porque hay dos caminos hacia Liceo.",
        },
        {
          valor: "c",
          texto:
            "El diagrama se vuelve más correcto porque repite la información.",
        },
        { valor: "d", texto: "La clase Profesor deja de existir." },
      ],
    },
    {
      numero: 15,
      tipo: "radio",
      enunciado:
        "¿Cuál de estas asociaciones sería propia de una subclase y no debería colocarse en la superclase Profesor?",
      opciones: [
        { valor: "a", texto: "Profesor trabaja en Liceo." },
        { valor: "b", texto: "Profesor tiene cédula." },
        { valor: "c", texto: "Laboratorista manipula Material." },
        { valor: "d", texto: "Profesor tiene nombre." },
      ],
    },
    {
      numero: 16,
      tipo: "radio",
      enunciado:
        "En un zoológico, Animal se usa como clase base de Tigre, Elefante y Jirafa. No se registran animales genéricos, solo animales de especies concretas. ¿Qué conviene indicar?",
      opciones: [
        { valor: "a", texto: "Que Animal es una clase abstracta." },
        { valor: "b", texto: "Que Animal es una clase de asociación." },
        {
          valor: "c",
          texto:
            "Que Animal debe eliminarse porque no tiene instancias directas.",
        },
        { valor: "d", texto: "Que Tigre, Elefante y Jirafa son roles." },
      ],
    },
    {
      numero: 17,
      tipo: "radio",
      enunciado:
        "¿Cuál es la diferencia conceptual más importante entre agregación y composición?",
      opciones: [
        {
          valor: "a",
          texto:
            "En la agregación el objeto parte puede existir independientemente; en la composición su existencia depende conceptualmente del todo.",
        },
        {
          valor: "b",
          texto: "La composición se usa solo para clases abstractas.",
        },
        { valor: "c", texto: "La agregación siempre representa herencia." },
        {
          valor: "d",
          texto: "No hay diferencia conceptual, solo cambia el dibujo.",
        },
      ],
    },
    {
      numero: 18,
      tipo: "radio",
      enunciado: "¿Cuál de estos ejemplos representa mejor una composición?",
      opciones: [
        {
          valor: "a",
          texto:
            "Auto contiene Motor, considerando que el auto no funciona conceptualmente como auto sin motor.",
        },
        { valor: "b", texto: "Persona conduce Auto." },
        { valor: "c", texto: "Cliente compra Producto." },
        { valor: "d", texto: "Profesor trabaja en Liceo." },
      ],
    },
    {
      numero: 19,
      tipo: "checkbox",
      enunciado:
        "En un modelo conceptual para una plataforma de eventos, se tienen Evento, Entrada, Usuario y Pago. Selecciona las decisiones de modelado razonables.",
      opciones: [
        {
          valor: "a",
          texto:
            "Entrada puede relacionar Usuario con Evento si representa la reserva concreta realizada.",
        },
        {
          valor: "b",
          texto:
            "Pago podría asociarse a Entrada si cada entrada genera un pago específico.",
        },
        {
          valor: "c",
          texto:
            "Usuario debería heredar de Evento porque participa en eventos.",
        },
        {
          valor: "d",
          texto:
            "Si una Entrada tiene número, fecha y estado, puede modelarse como una clase con identidad propia.",
        },
      ],
    },
    {
      numero: 20,
      tipo: "radio",
      enunciado:
        "En un diagrama conceptual, se detecta que una clase fue agregada solo porque será útil para programar una pantalla, pero no representa un concepto relevante de la realidad del problema. ¿Qué conviene hacer?",
      opciones: [
        {
          valor: "a",
          texto:
            "Mantenerla siempre, porque todo lo que se programa debe aparecer en el modelo conceptual.",
        },
        {
          valor: "b",
          texto:
            "Revisarla o quitarla del modelo conceptual, porque el análisis debe representar la realidad relevante del sistema.",
        },
        { valor: "c", texto: "Convertirla en clase abstracta." },
        {
          valor: "d",
          texto: "Unirla por composición a todas las demás clases.",
        },
      ],
    },
  ],
};
