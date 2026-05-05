window.QUIZ_DATA = {
  slug: "variables-java-01",
  titulo: "Variables en Java – Actividad 1",
  puntajeTotal: 12,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado:
        "¿Cuál de estas líneas declara correctamente una variable entera llamada edad con valor 15?",
      opciones: [
        { valor: "a", texto: "edad int = 15;", correcta: false },
        { valor: "b", texto: "int edad = 15;", correcta: true },
        { valor: "c", texto: "edad = int 15;", correcta: false },
        { valor: "d", texto: "int = edad 15;", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado:
        "En Java, una variable es un espacio con nombre donde se puede guardar un dato.",
      opciones: [
        { valor: "verdadero", texto: "Verdadero", correcta: true },
        { valor: "falso", texto: "Falso", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado:
        "¿Qué tipo de dato usarías para guardar un número entero como la cantidad de estudiantes de un grupo?",
      opciones: [
        { valor: "boolean", texto: "boolean", correcta: false },
        { valor: "char", texto: "char", correcta: false },
        { valor: "int", texto: "int", correcta: true },
        { valor: "double", texto: "double", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado:
        "¿Qué tipo de dato usarías para guardar un valor con decimales, como 9.5?",
      opciones: [
        { valor: "int", texto: "int", correcta: false },
        { valor: "double", texto: "double", correcta: true },
        { valor: "char", texto: "char", correcta: false },
        { valor: "boolean", texto: "boolean", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 5,
      tipo: "text",
      enunciado:
        "Completa la línea para declarar una variable booleana llamada cursoAprobado con valor verdadero.",
      placeholder: "Escribí la línea completa acá",
      respuestaEsperada: "boolean cursoAprobado = true;",
      puntaje: 1
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado:
        "¿Cuál de estas líneas declara correctamente una variable char con la letra A?",
      opciones: [
        { valor: "a", texto: 'char seccion = "A";', correcta: false },
        { valor: "b", texto: "char seccion = 'A';", correcta: true },
        { valor: "c", texto: "String seccion = 'A';", correcta: false },
        { valor: "d", texto: "char seccion = A;", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado:
        "La siguiente línea es correcta en Java: double promedio = 8;",
      opciones: [
        { valor: "verdadero", texto: "Verdadero", correcta: true },
        { valor: "falso", texto: "Falso", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado:
        "Observa el código:\nint puntos = 10;\npuntos = 25;\n\n¿Qué valor tiene puntos al final?",
      opciones: [
        { valor: "10", texto: "10", correcta: false },
        { valor: "15", texto: "15", correcta: false },
        { valor: "25", texto: "25", correcta: true },
        { valor: "error", texto: "Error", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado:
        "Observa el código:\nint edad = 16;\nedad++;\n\n¿Qué valor tiene edad al final?",
      opciones: [
        { valor: "15", texto: "15", correcta: false },
        { valor: "16", texto: "16", correcta: false },
        { valor: "17", texto: "17", correcta: true },
        { valor: "error", texto: "Error", correcta: false }
      ],
      puntaje: 1
    },
    {
      numero: 10,
      tipo: "text",
      enunciado:
        "Completa el código para que guarde una distancia grande en una variable long.",
      placeholder: "Escribí la línea completa acá",
      respuestaEsperada: "long distanciaEstelar = 9000L;",
      puntaje: 1
    },
    {
      numero: 11,
      tipo: "radio",
      enunciado: "¿Cuál de las siguientes asignaciones es incorrecta?",
      opciones: [
        { valor: "a", texto: "int cantidad = 20;", correcta: false },
        { valor: "b", texto: "double precio = 42.5;", correcta: false },
        { valor: "c", texto: "boolean activo = true;", correcta: false },
        { valor: "d", texto: "int nota = 7.5;", correcta: true }
      ],
      puntaje: 1
    },
    {
      numero: 12,
      tipo: "radio",
      enunciado:
        "Observa el código:\nint a = 5;\nint b = a;\na = 8;\n\n¿Qué valor tiene b al final?",
      opciones: [
        { valor: "5", texto: "5", correcta: true },
        { valor: "8", texto: "8", correcta: false },
        { valor: "13", texto: "13", correcta: false },
        { valor: "error", texto: "Error", correcta: false }
      ],
      puntaje: 1
    }
  ]
};