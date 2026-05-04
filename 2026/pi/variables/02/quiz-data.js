window.QUIZ_DATA = {
  slug: "variables-java-02",
  titulo: "Variables en Java - Actividad 2",
  descripcion:
    "Actividad de nivel medio y medio alto sobre variables, tipos de datos, entrada por teclado, operaciones aritméticas y lectura de código en Java.",
  puntajeTotal: 20,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado:
        "Un programa debe pedir la edad de una persona y guardarla para usarla en un cálculo. ¿Qué tipo de variable sería más adecuado?",
      opciones: [
        { valor: "a", texto: "String edad;" },
        { valor: "b", texto: "int edad;" },
        { valor: "c", texto: "double edad;" },
        { valor: "d", texto: "boolean edad;" },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado:
        "Un programa debe guardar el precio de un producto que puede tener decimales. ¿Cuál declaración es más adecuada?",
      opciones: [
        { valor: "a", texto: "int precio;" },
        { valor: "b", texto: "boolean precio;" },
        { valor: "c", texto: "double precio;" },
        { valor: "d", texto: "char precio;" },
      ],
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado:
        "¿Qué instrucción permite leer un número entero desde teclado usando un objeto Scanner llamado entrada?",
      opciones: [
        { valor: "a", texto: "entrada.nextLine();" },
        { valor: "b", texto: "entrada.nextDouble();" },
        { valor: "c", texto: "entrada.nextInt();" },
        { valor: "d", texto: "entrada.readInt();" },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado:
        "Observá el código: int a = 8; int b = 3; int resultado = a / b; ¿Qué valor queda guardado en resultado?",
      opciones: [
        { valor: "a", texto: "2" },
        { valor: "b", texto: "2.6" },
        { valor: "c", texto: "3" },
        { valor: "d", texto: "2.6666667" },
      ],
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado:
        "Observá el código: double promedio = (8 + 7 + 10) / 3; ¿Qué problema puede aparecer en este cálculo?",
      opciones: [
        {
          valor: "a",
          texto: "No se puede guardar un resultado en una variable double.",
        },
        {
          valor: "b",
          texto: "La división se hace primero como división entera.",
        },
        {
          valor: "c",
          texto: "Java no permite sumar tres números en una misma línea.",
        },
        {
          valor: "d",
          texto: "La variable promedio debería ser de tipo boolean.",
        },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado:
        "¿Cuál de estas expresiones calcula correctamente el promedio de tres notas enteras, evitando la división entera?",
      opciones: [
        { valor: "a", texto: "double promedio = (nota1 + nota2 + nota3) / 3;" },
        {
          valor: "b",
          texto: "double promedio = (nota1 + nota2 + nota3) / 3.0;",
        },
        { valor: "c", texto: "int promedio = (nota1 + nota2 + nota3) / 3.0;" },
        { valor: "d", texto: "double promedio = nota1 + nota2 + nota3 / 3;" },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado:
        "Un programa pide base y altura de un rectángulo. ¿Cuál expresión calcula correctamente el perímetro?",
      opciones: [
        { valor: "a", texto: "perimetro = base * altura;" },
        { valor: "b", texto: "perimetro = base + altura;" },
        { valor: "c", texto: "perimetro = 2 * (base + altura);" },
        { valor: "d", texto: "perimetro = base * base + altura * altura;" },
      ],
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado:
        "Un programa convierte grados Celsius a Fahrenheit. ¿Cuál expresión es correcta?",
      opciones: [
        { valor: "a", texto: "fahrenheit = celsius * 9 / 5 + 32;" },
        { valor: "b", texto: "fahrenheit = celsius + 32 * 9 / 5;" },
        { valor: "c", texto: "fahrenheit = celsius * 5 / 9 + 32;" },
        { valor: "d", texto: "fahrenheit = celsius / 32 + 9 / 5;" },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado:
        "Si un producto cuesta 125.50 y se compran 4 unidades, ¿qué tipo conviene usar para guardar el total a pagar?",
      opciones: [
        { valor: "a", texto: "int" },
        { valor: "b", texto: "double" },
        { valor: "c", texto: "boolean" },
        { valor: "d", texto: "char" },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado:
        "Observá el código: int x = 5; x = x + 3; ¿Qué valor tiene x al final?",
      opciones: [
        { valor: "a", texto: "3" },
        { valor: "b", texto: "5" },
        { valor: "c", texto: "8" },
        { valor: "d", texto: "x + 3" },
      ],
    },
    {
      numero: 11,
      tipo: "checkbox",
      enunciado:
        "Seleccioná las declaraciones de variables que son correctas en Java.",
      opciones: [
        { valor: "a", texto: "int cantidad = 12;" },
        { valor: "b", texto: "double precio = 45.90;" },
        { valor: "c", texto: "String nombre = Ana;" },
        { valor: "d", texto: "boolean activo = true;" },
      ],
    },
    {
      numero: 12,
      tipo: "checkbox",
      enunciado:
        "Seleccioná las variables que serían adecuadas para resolver un programa que calcula el total de una compra.",
      opciones: [
        { valor: "a", texto: "String producto;" },
        { valor: "b", texto: "double precioUnitario;" },
        { valor: "c", texto: "int cantidad;" },
        { valor: "d", texto: "boolean apellido;" },
      ],
    },
    {
      numero: 13,
      tipo: "radio",
      enunciado:
        "¿Qué salida produce este código? int a = 10; int b = 4; System.out.println(a % b);",
      opciones: [
        { valor: "a", texto: "2" },
        { valor: "b", texto: "2.5" },
        { valor: "c", texto: "4" },
        { valor: "d", texto: "10" },
      ],
    },
    {
      numero: 14,
      tipo: "radio",
      enunciado:
        "¿Cuál es el principal error en esta línea? int total = precio * cantidad; si precio fue declarado como double.",
      opciones: [
        {
          valor: "a",
          texto: "No se puede multiplicar una variable por otra.",
        },
        {
          valor: "b",
          texto:
            "El resultado puede tener decimales y no debería guardarse en int.",
        },
        {
          valor: "c",
          texto: "La variable cantidad siempre debe ser double.",
        },
        {
          valor: "d",
          texto: "La palabra total es reservada en Java.",
        },
      ],
    },
    {
      numero: 15,
      tipo: "radio",
      enunciado:
        "Un programa pide el nombre de un estudiante y luego tres notas. ¿Qué método de Scanner conviene para leer el nombre completo?",
      opciones: [
        { valor: "a", texto: "nextInt()" },
        { valor: "b", texto: "nextDouble()" },
        { valor: "c", texto: "nextLine()" },
        { valor: "d", texto: "nextBoolean()" },
      ],
    },
    {
      numero: 16,
      tipo: "checkbox",
      enunciado:
        "Seleccioná las expresiones que pueden producir resultados con decimales.",
      opciones: [
        { valor: "a", texto: "double total = precio * cantidad;" },
        { valor: "b", texto: "double promedio = suma / 3.0;" },
        { valor: "c", texto: "int resto = 10 % 3;" },
        { valor: "d", texto: "int suma = 4 + 5;" },
      ],
    },
    {
      numero: 17,
      tipo: "radio",
      enunciado:
        "¿Cuál es la mejor explicación de esta instrucción? total = total + nuevoImporte;",
      opciones: [
        {
          valor: "a",
          texto: "Crea una variable nueva llamada total.",
        },
        {
          valor: "b",
          texto:
            "Suma nuevoImporte al valor anterior de total y guarda el resultado en total.",
        },
        {
          valor: "c",
          texto: "Compara total con nuevoImporte.",
        },
        {
          valor: "d",
          texto: "Muestra total en pantalla.",
        },
      ],
    },
    {
      numero: 18,
      tipo: "radio",
      enunciado:
        "Observá el código: int minutos = 135; int horas = minutos / 60; int resto = minutos % 60; ¿Qué valores quedan guardados?",
      opciones: [
        { valor: "a", texto: "horas = 2 y resto = 15" },
        { valor: "b", texto: "horas = 2.25 y resto = 0" },
        { valor: "c", texto: "horas = 135 y resto = 60" },
        { valor: "d", texto: "horas = 15 y resto = 2" },
      ],
    },
    {
      numero: 19,
      tipo: "checkbox",
      enunciado:
        "Seleccioná las afirmaciones correctas sobre variables en Java.",
      opciones: [
        {
          valor: "a",
          texto: "Una variable debe declararse antes de usarse.",
        },
        {
          valor: "b",
          texto:
            "El tipo de dato ayuda a definir qué clase de valor puede guardar.",
        },
        {
          valor: "c",
          texto: "Una variable int puede guardar texto.",
        },
        {
          valor: "d",
          texto: "El valor de una variable puede cambiar durante la ejecución.",
        },
      ],
    },
    {
      numero: 20,
      tipo: "radio",
      enunciado:
        "Un programa debe mostrar: El total de la compra de cuadernos es 360. ¿Cuál combinación de variables permite construir ese mensaje?",
      opciones: [
        {
          valor: "a",
          texto: 'String producto = "cuadernos"; double total = 360;',
        },
        {
          valor: "b",
          texto: 'boolean producto = true; int total = "360";',
        },
        {
          valor: "c",
          texto: "int producto = cuadernos; String total = 360;",
        },
        {
          valor: "d",
          texto: "double producto = 360; boolean total = false;",
        },
      ],
    },
  ],
};
