window.ARREGLOS_STRINGS_EJERCICIOS = [
    {
        "numero":  1,
        "titulo":  "Cargar y mostrar números",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio01.java",
        "problema":  "Pedí al usuario 10 números enteros, guardalos en un arreglo y, cuando termine la carga, mostrá todos los valores en el mismo orden en que fueron ingresados.",
        "practicas":  "crear · llenar · recorrer · mostrar",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo Ejercicio01.java y dentro de él la clase Ejercicio01.",
                       "Dentro de la clase, escribí el método main.",
                       "Importá Scanner antes de la clase.",
                       "Dentro de main, creá una instancia de Scanner para leer desde el teclado.",
                       "Creá un arreglo de tipo int con espacio para 10 valores.",
                       "Creá un for que recorra los índices desde 0 hasta el último índice del arreglo.",
                       "Dentro de ese for, pedí un número y guardalo en la posición indicada por la variable de control.",
                       "Cuando termine la carga, creá un segundo for que vuelva a recorrer todo el arreglo.",
                       "Dentro del segundo for, mostrá el valor guardado en cada posición.",
                       "Ejecutá el programa y verificá que muestre exactamente los 10 valores ingresados."
                   ],
        "paraExplicar":  "¿Por qué se necesitan dos recorridos si primero queremos cargar todos los datos y después mostrarlos?"
    },
    {
        "numero":  2,
        "titulo":  "Mostrar desde el final",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio02.java",
        "problema":  "Pedí 10 números enteros, guardalos en un arreglo y luego mostralos desde la última posición hasta la primera.",
        "practicas":  "cargar · recorrer hacia atrás · usar índices",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo Ejercicio02.java, la clase Ejercicio02 y el método main.",
                       "Importá Scanner y creá una instancia dentro de main.",
                       "Creá un arreglo int con 10 posiciones.",
                       "Usá un primer for para pedir y guardar los 10 números.",
                       "Comprobá que el primer valor queda en el índice 0 y el último en el índice 9.",
                       "Creá un segundo for para mostrar los valores.",
                       "Hacé que la variable de control del segundo for comience en el último índice.",
                       "Indicá como condición que el recorrido continúe mientras el índice sea mayor o igual que 0.",
                       "Disminuí la variable de control en cada repetición y mostrá el elemento correspondiente.",
                       "Probá el programa con números fáciles de reconocer y revisá el orden de salida."
                   ],
        "paraExplicar":  "¿Qué tres partes del segundo for cambian con respecto a un recorrido de izquierda a derecha?"
    },
    {
        "numero":  3,
        "titulo":  "Sumar todos los elementos",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio03.java",
        "problema":  "Pedí 8 números enteros, guardalos en un arreglo y luego mostrá la suma de todos sus elementos.",
        "practicas":  "cargar · acumular · recorrer",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio03 y el método main.",
                       "Importá Scanner y creá el objeto que leerá los datos.",
                       "Creá un arreglo int con 8 posiciones.",
                       "Usá un for para llenar el arreglo.",
                       "Fuera del recorrido de suma, creá una variable acumuladora iniciada en 0.",
                       "Creá un segundo for que visite todas las posiciones.",
                       "En cada repetición, sumá el elemento actual al acumulador.",
                       "No muestres la suma dentro del for: esperá a que termine el recorrido.",
                       "Después del for, mostrá el valor final del acumulador.",
                       "Probá con valores cuya suma puedas calcular mentalmente."
                   ],
        "paraExplicar":  "¿Por qué la variable que acumula la suma debe crearse antes del segundo for?"
    },
    {
        "numero":  4,
        "titulo":  "Cambiar una posición elegida",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio04.java",
        "problema":  "Pedí 6 números enteros y guardalos. Después pedí un índice entre 0 y 5 y un nuevo valor. Si el índice es válido, reemplazá el elemento de esa posición y mostrá el arreglo completo.",
        "practicas":  "cargar · validar índice · modificar",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio04 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Creá un arreglo int con 6 posiciones.",
                       "Usá un for para pedir y guardar los 6 números.",
                       "Después de la carga, pedí el índice que el usuario desea modificar.",
                       "Pedí también el nuevo valor que se guardará.",
                       "Usá un if para comprobar que el índice esté entre 0 y 5.",
                       "Si es válido, asigná el nuevo valor a esa posición; si no, mostrá un aviso.",
                       "Recorré el arreglo para mostrar cómo quedó.",
                       "Probá una vez con un índice válido y otra con un índice que no exista."
                   ],
        "paraExplicar":  "¿Qué error podría ocurrir si se usa directamente un índice que está fuera del arreglo?"
    },
    {
        "numero":  5,
        "titulo":  "Intercambiar primero y último",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio05.java",
        "problema":  "Pedí 8 números, guardalos en un arreglo, intercambiá el valor de la primera posición con el de la última y mostrá el arreglo resultante.",
        "practicas":  "cargar · intercambiar · variable auxiliar",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio05 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Creá un arreglo int con 8 posiciones.",
                       "Usá un for para llenar el arreglo.",
                       "Identificá el índice de la primera posición y el de la última.",
                       "Creá una variable auxiliar del mismo tipo que los elementos.",
                       "Guardá temporalmente en la auxiliar uno de los dos valores.",
                       "Realizá las otras dos asignaciones necesarias para completar el intercambio.",
                       "Usá otro for para mostrar el arreglo modificado.",
                       "Comprobá que solo hayan cambiado el primer y el último elemento."
                   ],
        "paraExplicar":  "¿Qué valor se perdería si intentaras intercambiar los elementos sin una variable auxiliar?"
    },
    {
        "numero":  6,
        "titulo":  "Contar números pares",
        "tipo":  "Arreglo",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio06.java",
        "problema":  "Pedí 10 números enteros, guardalos y luego indicá cuántos de ellos son pares.",
        "practicas":  "cargar · condición · contador",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio06 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Creá un arreglo int con 10 posiciones.",
                       "Usá un for para pedir y guardar los números.",
                       "Creá una variable contador iniciada en 0.",
                       "Recorré nuevamente todo el arreglo.",
                       "Dentro del recorrido, usá una condición para saber si el elemento actual es par.",
                       "Aumentá el contador solamente cuando se cumpla la condición.",
                       "Mostrá el contador después de terminar el recorrido.",
                       "Probá con una combinación de números pares e impares."
                   ],
        "paraExplicar":  "¿En qué se diferencia un contador de un acumulador?"
    },
    {
        "numero":  7,
        "titulo":  "Una letra por línea",
        "tipo":  "String",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio07.java",
        "problema":  "Pedí al usuario una palabra y mostrá cada uno de sus caracteres en una línea diferente.",
        "practicas":  "leer texto · length() · charAt() · recorrer",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio07 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Pedí una palabra y guardala en una variable String.",
                       "Pensá cuántos caracteres tiene el texto usando length().",
                       "Creá un for que comience en el índice 0.",
                       "Hacé que el for continúe mientras el índice sea menor que la cantidad de caracteres.",
                       "Dentro del for, obtené el carácter de la posición actual con charAt().",
                       "Mostrá ese carácter con println para que cada uno quede en una línea.",
                       "No intentes acceder a la posición igual a length(): esa posición no existe.",
                       "Probá con una palabra corta y contá las líneas mostradas."
                   ],
        "paraExplicar":  "Si una palabra tiene 5 caracteres, ¿cuál es el índice de su último carácter?"
    },
    {
        "numero":  8,
        "titulo":  "Palabra de atrás hacia adelante",
        "tipo":  "String",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio08.java",
        "problema":  "Pedí una palabra y mostrá sus caracteres desde el último hasta el primero.",
        "practicas":  "recorrer hacia atrás · length() · charAt()",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio08 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Pedí la palabra y guardala en una variable String.",
                       "Calculá cuál es el índice del último carácter usando length() - 1.",
                       "Creá un for que empiece en ese último índice.",
                       "Hacé que el recorrido continúe mientras el índice sea mayor o igual que 0.",
                       "Disminuí el índice en cada repetición.",
                       "Dentro del for, obtené el carácter actual con charAt().",
                       "Usá print, y no println, si querés formar la salida en una sola línea.",
                       "Probá con una palabra que no sea igual al leerla al revés."
                   ],
        "paraExplicar":  "¿Por qué el recorrido debe comenzar en length() - 1 y no en length()?"
    },
    {
        "numero":  9,
        "titulo":  "Contar apariciones de una letra",
        "tipo":  "String",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio09.java",
        "problema":  "Pedí una palabra y una letra. Mostrá cuántas veces aparece esa letra dentro de la palabra. La comparación puede distinguir entre mayúsculas y minúsculas.",
        "practicas":  "recorrer · comparar caracteres · contar",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio09 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Pedí una palabra y guardala en un String.",
                       "Pedí la letra a buscar y guardala en una variable char o tomá el primer carácter del texto ingresado.",
                       "Creá un contador iniciado en 0.",
                       "Usá un for para recorrer todos los índices válidos de la palabra.",
                       "En cada posición, obtené el carácter con charAt().",
                       "Compará el carácter actual con la letra buscada.",
                       "Aumentá el contador cuando sean iguales y mostralo al finalizar.",
                       "Probá con una palabra que contenga la letra varias veces."
                   ],
        "paraExplicar":  "¿Por qué el contador aumenta solo cuando la comparación resulta verdadera?"
    },
    {
        "numero":  10,
        "titulo":  "Guardar y mostrar cinco palabras",
        "tipo":  "Arreglo de String",
        "nivel":  "Inicio guiado",
        "archivo":  "Ejercicio10.java",
        "problema":  "Pedí 5 palabras, guardalas en un arreglo de String y luego mostralas en el mismo orden, indicando también el índice de cada una.",
        "practicas":  "crear String[] · llenar · recorrer",
        "ayudaTitulo":  "Pasos para organizar el programa",
        "ayudas":  [
                       "Creá el archivo, la clase Ejercicio10 y el método main.",
                       "Importá Scanner y creá una instancia.",
                       "Creá un arreglo de tipo String con 5 posiciones.",
                       "Usá un for para recorrer los índices del arreglo.",
                       "Dentro del for, pedí una palabra.",
                       "Guardá la palabra en la posición indicada por la variable de control.",
                       "Cuando termine la carga, creá un segundo recorrido.",
                       "En cada repetición, mostrá primero el índice y después la palabra guardada.",
                       "Revisá que se hayan mostrado las cinco posiciones, desde 0 hasta 4.",
                       "Probá con palabras de distintos largos."
                   ],
        "paraExplicar":  "¿Qué diferencia hay entre el largo del arreglo y el largo de una de las palabras guardadas?"
    },
    {
        "numero":  11,
        "titulo":  "Mostrar solamente los positivos",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio11.java",
        "problema":  "Pedí 10 números enteros, guardalos y mostrá solamente los que sean mayores que 0.",
        "practicas":  "carga · recorrido · condición",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un arreglo int",
                       "un recorrido de carga",
                       "un recorrido de análisis",
                       "una condición dentro del segundo recorrido"
                   ],
        "paraExplicar":  "¿El valor 0 debe mostrarse? Justificá según la consigna."
    },
    {
        "numero":  12,
        "titulo":  "Valores mayores que un límite",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio12.java",
        "problema":  "Pedí 10 números y guardalos. Después pedí un valor límite y mostrá los elementos del arreglo que sean mayores que ese límite.",
        "practicas":  "recorrido · comparación · entrada adicional",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un arreglo",
                       "dos datos diferentes: los elementos y el límite",
                       "un recorrido para comparar",
                       "un if"
                   ],
        "paraExplicar":  "¿El límite se guarda dentro del arreglo o en una variable separada?"
    },
    {
        "numero":  13,
        "titulo":  "Reemplazar negativos por cero",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio13.java",
        "problema":  "Pedí 10 números enteros. Luego reemplazá por 0 todos los elementos negativos y mostrá el arreglo modificado.",
        "practicas":  "recorrido · condición · modificación",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "cargar el arreglo",
                       "recorrer mirando cada elemento",
                       "asignar un nuevo valor solamente cuando corresponda",
                       "mostrar el resultado final"
                   ],
        "paraExplicar":  "¿En qué momento se modifica el arreglo: al leer el número o en un recorrido posterior?"
    },
    {
        "numero":  14,
        "titulo":  "Promedio de los valores",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio14.java",
        "problema":  "Pedí 8 números enteros, guardalos y mostrá el promedio de todos los valores. El resultado debe poder tener decimales.",
        "practicas":  "acumular · calcular promedio",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un acumulador",
                       "un recorrido completo",
                       "una división realizada como double",
                       "mostrar el resultado después del recorrido"
                   ],
        "paraExplicar":  "¿Qué debes cuidar para que la división no pierda la parte decimal?"
    },
    {
        "numero":  15,
        "titulo":  "Encontrar el mayor",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio15.java",
        "problema":  "Pedí 10 números enteros, guardalos y mostrá el valor mayor del arreglo.",
        "practicas":  "comparar · actualizar candidato",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "cargar el arreglo",
                       "tomar un elemento real como primer candidato",
                       "recorrer y comparar",
                       "actualizar el mayor cuando corresponda"
                   ],
        "paraExplicar":  "¿Por qué iniciar el mayor en 0 puede fallar si todos los números son negativos?"
    },
    {
        "numero":  16,
        "titulo":  "Encontrar el menor y su índice",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio16.java",
        "problema":  "Pedí 10 números enteros. Mostrá el menor valor y el índice de la posición en la que aparece por primera vez.",
        "practicas":  "comparar · guardar valor e índice",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "una variable para el menor",
                       "otra variable para su índice",
                       "una comparación durante el recorrido",
                       "actualizar ambas variables juntas"
                   ],
        "paraExplicar":  "Si el menor aparece dos veces, ¿qué comparación permite conservar la primera posición?"
    },
    {
        "numero":  17,
        "titulo":  "Modificar varias posiciones",
        "tipo":  "Arreglo",
        "nivel":  "Base",
        "archivo":  "Ejercicio17.java",
        "problema":  "Cargá un arreglo de 8 números. Luego permití realizar 3 cambios: en cada cambio se pide un índice válido y un nuevo valor. Al final, mostrá el arreglo.",
        "practicas":  "menú breve · validación · modificación",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un recorrido de carga",
                       "otro recorrido que se repita 3 veces",
                       "validar cada índice",
                       "asignar el nuevo valor"
                   ],
        "paraExplicar":  "¿Qué recorrido controla la cantidad de cambios y cuál se usa para mostrar el arreglo?"
    },
    {
        "numero":  18,
        "titulo":  "Primera y última letra",
        "tipo":  "String",
        "nivel":  "Base",
        "archivo":  "Ejercicio18.java",
        "problema":  "Pedí una palabra y mostrá su primera letra y su última letra. Si el usuario ingresa un texto vacío, mostrale un aviso.",
        "practicas":  "índices · charAt() · length()",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "leer un String",
                       "comprobar que tenga al menos un carácter",
                       "usar los índices 0 y length() - 1",
                       "un if para evitar un acceso inválido"
                   ],
        "paraExplicar":  "¿Qué índice tiene siempre el primer carácter de un String no vacío?"
    },
    {
        "numero":  19,
        "titulo":  "Contar vocales",
        "tipo":  "String",
        "nivel":  "Base",
        "archivo":  "Ejercicio19.java",
        "problema":  "Pedí una palabra y mostrá cuántas vocales contiene. Para simplificar, convertí la palabra a minúsculas antes de recorrerla.",
        "practicas":  "recorrido · varias condiciones · contador",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un String",
                       "toLowerCase()",
                       "un recorrido con charAt()",
                       "una condición que reconozca las cinco vocales",
                       "un contador"
                   ],
        "paraExplicar":  "¿Qué ventaja ofrece convertir primero todo el texto a minúsculas?"
    },
    {
        "numero":  20,
        "titulo":  "Palabras con más de cinco letras",
        "tipo":  "Arreglo de String",
        "nivel":  "Base",
        "archivo":  "Ejercicio20.java",
        "problema":  "Pedí 6 palabras, guardalas y mostrá solamente las que tengan más de 5 caracteres.",
        "practicas":  "String[] · length() · filtro",
        "ayudaTitulo":  "Para resolverlo vas a necesitar",
        "ayudas":  [
                       "un arreglo de String",
                       "un recorrido de carga",
                       "un recorrido de análisis",
                       "aplicar length() a cada palabra"
                   ],
        "paraExplicar":  "¿Cuándo corresponde usar arreglo.length y cuándo palabra.length()?"
    },
    {
        "numero":  21,
        "titulo":  "Copiar un arreglo",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio21.java",
        "problema":  "Pedí 8 números y guardalos en un arreglo. Copiá sus elementos a un segundo arreglo, conservando el mismo orden. Mostrá ambos.",
        "practicas":  "dos arreglos · copia por índice",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  22,
        "titulo":  "Copiar en orden inverso",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio22.java",
        "problema":  "Pedí 10 números y guardalos en un arreglo. Copialos a otro arreglo en orden inverso: el elemento de la posición 0 debe quedar en la posición 9, el de la 1 en la 8, y así sucesivamente.",
        "practicas":  "dos arreglos · correspondencia de índices",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  23,
        "titulo":  "Intercambiar elementos vecinos",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio23.java",
        "problema":  "Pedí 10 números. Intercambiá los elementos por parejas: posición 0 con 1, posición 2 con 3, posición 4 con 5, etc. Mostrá el resultado.",
        "practicas":  "intercambio · recorrido de dos en dos",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  24,
        "titulo":  "Desplazamiento circular a la derecha",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio24.java",
        "problema":  "Pedí 8 números. Desplazá todos los elementos una posición hacia la derecha y llevá el último elemento a la posición 0. Mostrá el arreglo antes y después.",
        "practicas":  "guardar extremo · desplazar · modificar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  25,
        "titulo":  "Búsqueda lineal con while",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio25.java",
        "problema":  "Pedí 10 números y luego un valor a buscar. Recorre el arreglo con while mientras queden posiciones y el valor todavía no haya sido encontrado. Indicá si aparece y en qué primera posición.",
        "practicas":  "buscar · while · bandera",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  26,
        "titulo":  "Cantidad de repeticiones",
        "tipo":  "Arreglo",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio26.java",
        "problema":  "Pedí 12 números y luego otro número. Mostrá cuántas veces aparece ese valor dentro del arreglo.",
        "practicas":  "buscar · contar coincidencias",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  27,
        "titulo":  "Construir el texto invertido",
        "tipo":  "String",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio27.java",
        "problema":  "Pedí una palabra y construí un segundo String con sus caracteres en orden inverso. Al final, mostrá el texto original y el nuevo texto.",
        "practicas":  "recorrido inverso · concatenación",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  28,
        "titulo":  "Detectar un palíndromo",
        "tipo":  "String",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio28.java",
        "problema":  "Pedí una palabra, construí su versión invertida e indicá si se lee igual de izquierda a derecha y de derecha a izquierda. Para simplificar, ignorá la diferencia entre mayúsculas y minúsculas, pero no espacios ni tildes.",
        "practicas":  "invertir · comparar Strings",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  29,
        "titulo":  "Ocultar las vocales",
        "tipo":  "String",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio29.java",
        "problema":  "Pedí una palabra y construí otro String en el que cada vocal sea reemplazada por el carácter *. Los demás caracteres deben conservarse.",
        "practicas":  "recorrer · construir texto · condición",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  30,
        "titulo":  "La palabra más larga",
        "tipo":  "Arreglo de String",
        "nivel":  "Práctica",
        "archivo":  "Ejercicio30.java",
        "problema":  "Pedí 7 palabras, guardalas y mostrá la palabra con mayor cantidad de caracteres. Si hay empate, conservá la primera que apareció.",
        "practicas":  "String[] · comparar largos · conservar candidato",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  31,
        "titulo":  "Pares al comienzo, impares al final",
        "tipo":  "Arreglo",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio31.java",
        "problema":  "Pedí 10 números. Creá un segundo arreglo que coloque primero todos los pares y después todos los impares, sin importar el orden dentro de cada grupo. Mostrá el nuevo arreglo.",
        "practicas":  "clasificar · segundo arreglo · dos índices",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  32,
        "titulo":  "Llevar el mayor al inicio",
        "tipo":  "Arreglo",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio32.java",
        "problema":  "Pedí 10 números. Buscá el mayor e intercambialo con el elemento de la posición 0. Mostrá el arreglo antes y después.",
        "practicas":  "buscar mayor · guardar índice · intercambiar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  33,
        "titulo":  "Llevar el menor al final",
        "tipo":  "Arreglo",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio33.java",
        "problema":  "Pedí 10 números. Buscá el menor e intercambialo con el último elemento. Mostrá el arreglo resultante.",
        "practicas":  "buscar menor · guardar índice · intercambiar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  34,
        "titulo":  "Una vuelta de burbuja",
        "tipo":  "Arreglo",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio34.java",
        "problema":  "Pedí 8 números. Realizá una sola vuelta del ordenamiento burbuja de izquierda a derecha: compará cada par vecino e intercambialo si está desordenado. Mostrá cómo queda el arreglo después de esa única vuelta.",
        "practicas":  "comparar vecinos · intercambiar · for",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  35,
        "titulo":  "Coincidencias entre dos arreglos",
        "tipo":  "Arreglo",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio35.java",
        "problema":  "Cargá dos arreglos de 6 números cada uno. Mostrá los índices en los que ambos arreglos contienen el mismo valor y contá cuántas coincidencias hubo.",
        "practicas":  "dos arreglos · comparación por posición",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  36,
        "titulo":  "Palabra formada por iniciales",
        "tipo":  "Arreglo de String",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio36.java",
        "problema":  "Pedí 5 palabras y construí un nuevo String con la primera letra de cada una. No aceptes palabras vacías.",
        "practicas":  "String[] · charAt() · concatenar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  37,
        "titulo":  "Cada palabra al revés",
        "tipo":  "Arreglo de String",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio37.java",
        "problema":  "Pedí 5 palabras, guardalas y mostrá cada palabra con sus caracteres en orden inverso. No cambies el contenido del arreglo original.",
        "practicas":  "dos recorridos · String[] · recorrido inverso",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  38,
        "titulo":  "Palíndromos dentro del arreglo",
        "tipo":  "Arreglo de String",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio38.java",
        "problema":  "Pedí 6 palabras y mostrá solamente las que sean palíndromos. La comparación debe ignorar mayúsculas y minúsculas.",
        "practicas":  "dos recorridos · construir · comparar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  39,
        "titulo":  "Contar palabras de una frase",
        "tipo":  "String",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio39.java",
        "problema":  "Pedí una frase y contá cuántas palabras contiene. Para este ejercicio, suponé que la frase no empieza ni termina con espacios y que entre dos palabras hay un solo espacio.",
        "practicas":  "recorrido · espacios · contador",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  40,
        "titulo":  "Nombres y calificaciones",
        "tipo":  "Mixto",
        "nivel":  "Aplicación",
        "archivo":  "Ejercicio40.java",
        "problema":  "Pedí los nombres y las calificaciones de 6 estudiantes y guardalos en dos arreglos relacionados por el índice. Mostrá el promedio del grupo y los nombres de quienes obtuvieron una calificación igual o superior a 6.",
        "practicas":  "arreglos paralelos · filtro · promedio",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  41,
        "titulo":  "Invertir un arreglo en el mismo lugar",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio41.java",
        "problema":  "Pedí 10 números e invertí el orden de los elementos dentro del mismo arreglo, sin crear un segundo arreglo. Mostrá el resultado.",
        "practicas":  "intercambios · índices opuestos · medio recorrido",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  42,
        "titulo":  "Rotar varias posiciones",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio42.java",
        "problema":  "Pedí 8 números y una cantidad de desplazamientos. Rotá el arreglo hacia la izquierda esa cantidad de veces: en cada rotación, el primer elemento pasa al final.",
        "practicas":  "desplazamiento circular · repetición",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  43,
        "titulo":  "Eliminar una posición de forma lógica",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio43.java",
        "problema":  "Cargá 8 números y pedí un índice a eliminar. Como el arreglo no cambia su tamaño real, desplazá hacia la izquierda los elementos posteriores y reducí en uno una variable que represente el tamaño lógico. Mostrá solamente los elementos que siguen siendo válidos.",
        "practicas":  "validar · desplazar · tamaño lógico",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  44,
        "titulo":  "Insertar un valor en una posición",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio44.java",
        "problema":  "Creá un arreglo con 11 posiciones, pero cargá inicialmente solo 10 números. Pedí un nuevo valor y un índice entre 0 y 10. Desplazá hacia la derecha los elementos necesarios e insertá el valor en la posición indicada.",
        "practicas":  "espacio disponible · desplazar · insertar",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  45,
        "titulo":  "Arreglo sin valores repetidos",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio45.java",
        "problema":  "Pedí 10 números. Copiá a un segundo arreglo solamente la primera aparición de cada valor, de modo que el resultado no contenga repetidos. Mostrá únicamente la parte utilizada del segundo arreglo.",
        "practicas":  "búsqueda interna · segundo arreglo · tamaño lógico",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  46,
        "titulo":  "Texto sin vocales",
        "tipo":  "String",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio46.java",
        "problema":  "Pedí una frase y construí un nuevo String que conserve todos sus caracteres excepto las vocales. La salida debe mantener los espacios y los signos de puntuación.",
        "practicas":  "recorrer · filtrar · construir",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  47,
        "titulo":  "Frecuencia de cada carácter",
        "tipo":  "String",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio47.java",
        "problema":  "Pedí una palabra. Para cada carácter diferente, mostrá cuántas veces aparece. No muestres dos veces el informe del mismo carácter. La comparación debe ignorar mayúsculas y minúsculas.",
        "practicas":  "for anidado · contar · evitar repetir resultados",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  48,
        "titulo":  "Ordenar palabras alfabéticamente",
        "tipo":  "Arreglo de String",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio48.java",
        "problema":  "Pedí 6 palabras, guardalas y ordenalas alfabéticamente usando comparaciones e intercambios. Mostrá el arreglo antes y después.",
        "practicas":  "compareToIgnoreCase() · intercambio · for anidado",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  49,
        "titulo":  "Ordenamiento burbuja completo",
        "tipo":  "Arreglo",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio49.java",
        "problema":  "Pedí 10 números y ordenalos de menor a mayor con el método burbuja. En cada vuelta, evitá volver a comparar la parte final que ya quedó ordenada.",
        "practicas":  "for anidado · comparar vecinos · optimizar recorrido",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    },
    {
        "numero":  50,
        "titulo":  "Resultados de una carrera",
        "tipo":  "Mixto",
        "nivel":  "Desafío",
        "archivo":  "Ejercicio50.java",
        "problema":  "Pedí los nombres y los tiempos de 6 participantes. Guardá los datos en dos arreglos paralelos. Encontrá el menor tiempo y llevá a esa persona a la posición 0, intercambiando tanto el nombre como el tiempo para no perder la relación. Mostrá la clasificación resultante sin ordenar las demás posiciones.",
        "practicas":  "arreglos paralelos · buscar · intercambiar datos relacionados",
        "ayudaTitulo":  "A",
        "ayudas":  {

                   },
        "paraExplicar":  "Explicá dónde comienza y termina cada recorrido y qué cambia en cada repetición."
    }
];
