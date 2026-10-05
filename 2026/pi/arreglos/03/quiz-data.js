window.QUIZ_DATA = {
  slug: "arreglos-recorridos-salida-03",
  titulo: "Preguntas de salida: arreglos y recorridos",
  puntajeTotal: 10,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: `Observá el siguiente código:\n\nint[] numeros = {4, 9, 2, 7, 5};\nint i = 0;\nboolean encontrado = false;\n\nwhile (i < numeros.length && !encontrado) {\n    if (numeros[i] == 2) {\n        encontrado = true;\n    } else {\n        i++;\n    }\n}\n\n¿Cuánto vale i al terminar el while?`,
      opciones: [
        { valor: "a", texto: "0" },
        { valor: "b", texto: "1" },
        { valor: "c", texto: "2" },
        { valor: "d", texto: "3" },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado: `Usando el mismo código:\n\nint[] numeros = {4, 9, 2, 7, 5};\nint i = 0;\nboolean encontrado = false;\n\nwhile (i < numeros.length && !encontrado) {\n    if (numeros[i] == 2) {\n        encontrado = true;\n    } else {\n        i++;\n    }\n}\n\n¿Cuánto vale encontrado al terminar el while?`,
      opciones: [
        { valor: "a", texto: "true" },
        { valor: "b", texto: "false" },
        { valor: "c", texto: "2" },
        { valor: "d", texto: "null" },
      ],
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: `¿Por qué el programa deja de revisar posiciones después de encontrar el número 2?`,
      opciones: [
        { valor: "a", texto: "Porque i llega al final del arreglo." },
        { valor: "b", texto: "Porque encontrado pasa a true y entonces !encontrado pasa a false." },
        { valor: "c", texto: "Porque un if siempre finaliza el while." },
        { valor: "d", texto: "Porque el valor 2 ocupa la última posición." },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: `La consigna dice: “Si dos palabras tienen el mismo largo, conservar la primera”.\n\nString mayor = palabras[0];\n\nfor (int i = 1; i < palabras.length; i++) {\n    if (palabras[i].length() >= mayor.length()) {\n        mayor = palabras[i];\n    }\n}\n\n¿Qué cambio permite cumplir la consigna?`,
      opciones: [
        { valor: "a", texto: "Cambiar >= por <=." },
        { valor: "b", texto: "Comenzar el for en i = 0." },
        { valor: "c", texto: "Cambiar >= por >." },
        { valor: "d", texto: "Cambiar mayor por palabras[i]." },
      ],
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado: `¿Por qué usar > conserva la primera palabra cuando hay empate de largos?`,
      opciones: [
        { valor: "a", texto: "Porque solo reemplaza mayor si aparece una palabra estrictamente más larga." },
        { valor: "b", texto: "Porque hace que el for termine al encontrar dos largos iguales." },
        { valor: "c", texto: "Porque impide comparar la primera palabra." },
        { valor: "d", texto: "Porque ordena las palabras por su largo." },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado: `Tenemos un arreglo con 10 temperaturas y queremos encontrar la primera temperatura mayor que 30. ¿Qué variables de control resultan adecuadas?`,
      opciones: [
        { valor: "a", texto: "Solamente un acumulador llamado suma." },
        { valor: "b", texto: "Un contador que siempre recorra las 10 posiciones." },
        { valor: "c", texto: "Un índice i y una variable boolean encontrada." },
        { valor: "d", texto: "Dos arreglos adicionales de 10 posiciones." },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado: `¿Qué estructura permite detener el recorrido apenas se encuentra la primera temperatura mayor que 30?`,
      opciones: [
        { valor: "a", texto: "Un if sin repetición." },
        { valor: "b", texto: "Un while con una condición de índice válido y otra de búsqueda pendiente." },
        { valor: "c", texto: "Un switch que evalúe todas las temperaturas." },
        { valor: "d", texto: "Un for que obligatoriamente recorra siempre las 10 posiciones." },
      ],
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado: `¿Cuál es una condición correcta para ese recorrido?`,
      opciones: [
        { valor: "a", texto: "i <= temperaturas.length || encontrada" },
        { valor: "b", texto: "i > temperaturas.length && encontrada" },
        { valor: "c", texto: "i < temperaturas.length || !encontrada" },
        { valor: "d", texto: "i < temperaturas.length && !encontrada" },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado: `Completá la lógica de búsqueda:\n\nint i = 0;\nboolean encontrada = false;\n\nwhile (i < temperaturas.length && !encontrada) {\n    if (temperaturas[i] > 30) {\n        ______________________\n    } else {\n        i++;\n    }\n}\n\n¿Qué instrucción corresponde en el espacio?`,
      opciones: [
        { valor: "a", texto: "i = temperaturas.length + 1;" },
        { valor: "b", texto: "encontrada = true;" },
        { valor: "c", texto: "temperaturas[i] = 30;" },
        { valor: "d", texto: "i--;" },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado: `Si ninguna de las 10 temperaturas es mayor que 30, ¿cómo termina el recorrido propuesto?`,
      opciones: [
        { valor: "a", texto: "i vale 0 y encontrada vale true." },
        { valor: "b", texto: "i vale 9 y encontrada vale true." },
        { valor: "c", texto: "i vale 10 y encontrada vale false." },
        { valor: "d", texto: "El recorrido nunca termina." },
      ],
    },
  ],
};
