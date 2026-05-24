window.QUIZ_DATA = {
  slug: "condicionales-if-01",
  titulo: "Condicionales en Java - Actividad 1",
  puntajeTotal: 10,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int edad = 17;

if (edad >= 18) {
    System.out.println("Puede votar");
}

System.out.println("Fin del programa");`,
      opciones: [
        { valor: "a", texto: "Puede votar" },
        { valor: "b", texto: "Fin del programa" },
        { valor: "c", texto: "Puede votar\nFin del programa" },
        { valor: "d", texto: "No muestra nada" },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int nota = 6;

if (nota >= 6) {
    System.out.println("Aprobado");
} else {
    System.out.println("Debe mejorar");
}`,
      opciones: [
        { valor: "a", texto: "Aprobado" },
        { valor: "b", texto: "Debe mejorar" },
        { valor: "c", texto: "Aprobado\nDebe mejorar" },
        { valor: "d", texto: "No muestra nada" },
      ],
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int temperatura = 30;

if (temperatura > 30) {
    System.out.println("Mucho calor");
} else if (temperatura >= 20) {
    System.out.println("Temperatura agradable");
} else {
    System.out.println("Hace frío");
}`,
      opciones: [
        { valor: "a", texto: "Mucho calor" },
        { valor: "b", texto: "Temperatura agradable" },
        { valor: "c", texto: "Hace frío" },
        { valor: "d", texto: "Mucho calor\nTemperatura agradable" },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: `Indica si la afirmación es verdadera o falsa.

En el siguiente código se mostrará solamente el mensaje "Número positivo":

int numero = 8;

if (numero > 0) {
    System.out.println("Número positivo");
}

if (numero % 2 == 0) {
    System.out.println("Número par");
}`,
      opciones: [
        { valor: "v", texto: "Verdadero" },
        { valor: "f", texto: "Falso" },
      ],
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int x = 5;
int y = 10;

if (x > y) {
    System.out.println("x es mayor");
} else {
    System.out.println("y es mayor o igual");
}

System.out.println("Comparación finalizada");`,
      opciones: [
        { valor: "a", texto: "x es mayor" },
        { valor: "b", texto: "y es mayor o igual" },
        { valor: "c", texto: "y es mayor o igual\nComparación finalizada" },
        { valor: "d", texto: "Comparación finalizada" },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int puntos = 80;

if (puntos >= 90) {
    System.out.println("Excelente");
} else if (puntos >= 70) {
    System.out.println("Muy bien");
} else if (puntos >= 50) {
    System.out.println("Aceptable");
} else {
    System.out.println("Insuficiente");
}`,
      opciones: [
        { valor: "a", texto: "Excelente" },
        { valor: "b", texto: "Muy bien" },
        { valor: "c", texto: "Aceptable" },
        { valor: "d", texto: "Muy bien\nAceptable" },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado: `Indica si la afirmación es verdadera o falsa.

En el siguiente código se mostrará "Nivel 2" porque la primera condición verdadera detiene el resto del encadenamiento:

int nivel = 2;

if (nivel == 1) {
    System.out.println("Nivel 1");
} else if (nivel == 2) {
    System.out.println("Nivel 2");
} else if (nivel == 3) {
    System.out.println("Nivel 3");
} else {
    System.out.println("Nivel desconocido");
}`,
      opciones: [
        { valor: "v", texto: "Verdadero" },
        { valor: "f", texto: "Falso" },
      ],
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int a = 4;
int b = 4;

if (a > b) {
    System.out.println("A");
} else if (a == b) {
    System.out.println("B");
} else {
    System.out.println("C");
}

System.out.println("D");`,
      opciones: [
        { valor: "a", texto: "A\nD" },
        { valor: "b", texto: "B\nD" },
        { valor: "c", texto: "C\nD" },
        { valor: "d", texto: "B\nC\nD" },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int numero = 15;

if (numero % 2 == 0) {
    System.out.println("Divisible entre 2");
} else if (numero % 3 == 0) {
    System.out.println("Divisible entre 3");
} else if (numero % 5 == 0) {
    System.out.println("Divisible entre 5");
} else {
    System.out.println("No cumple");
}`,
      opciones: [
        { valor: "a", texto: "Divisible entre 3" },
        { valor: "b", texto: "Divisible entre 5" },
        { valor: "c", texto: "Divisible entre 3\nDivisible entre 5" },
        { valor: "d", texto: "No cumple" },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int saldo = 1000;
int retiro = 1000;

if (retiro < saldo) {
    System.out.println("Retiro autorizado");
} else if (retiro == saldo) {
    System.out.println("Retiro autorizado, cuenta en cero");
} else {
    System.out.println("Fondos insuficientes");
}

System.out.println("Operación terminada");`,
      opciones: [
        { valor: "a", texto: "Retiro autorizado\nOperación terminada" },
        {
          valor: "b",
          texto: "Retiro autorizado, cuenta en cero\nOperación terminada",
        },
        { valor: "c", texto: "Fondos insuficientes\nOperación terminada" },
        { valor: "d", texto: "Operación terminada" },
      ],
    },
  ],
};
