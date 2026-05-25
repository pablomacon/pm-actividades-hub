window.QUIZ_DATA = {
  slug: "condicionales-if-02",
  titulo: "Condicionales en Java - Actividad 2",
  puntajeTotal: 10,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int nivel = 12;
int vidas = 2;

if (nivel >= 10 && vidas > 0) {
    System.out.println("Zona desbloqueada");
} else {
    System.out.println("No puedes entrar");
}

if (vidas == 0) {
    System.out.println("Game over");
}`,
      opciones: [
        { valor: "a", texto: "No puedes entrar" },
        { valor: "b", texto: "Zona desbloqueada" },
        { valor: "c", texto: "Zona desbloqueada\nGame over" },
        { valor: "d", texto: "Game over" },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int monedas = 45;
int precioSkin = 50;

if (monedas >= precioSkin) {
    System.out.println("Skin comprada");
} else if (monedas >= 25) {
    System.out.println("Falta poco");
} else {
    System.out.println("No alcanza");
}`,
      opciones: [
        { valor: "a", texto: "Skin comprada" },
        { valor: "b", texto: "Falta poco" },
        { valor: "c", texto: "No alcanza" },
        { valor: "d", texto: "Skin comprada\nFalta poco" },
      ],
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int energia = 30;

if (energia < 20) {
    System.out.println("Descansar");
} else if (energia < 50) {
    System.out.println("Jugar con cuidado");
} else {
    System.out.println("Misión completa");
}`,
      opciones: [
        { valor: "a", texto: "Descansar" },
        { valor: "b", texto: "Misión completa" },
        { valor: "c", texto: "Jugar con cuidado" },
        { valor: "d", texto: "No muestra nada" },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: `Indica si la afirmación es verdadera o falsa.

En el siguiente código se mostrará solamente el mensaje "Clasifica a torneo":

String rango = "oro";
int puntos = 1500;

if (puntos >= 1000) {
    System.out.println("Clasifica a torneo");
}

if (puntos >= 1200) {
    System.out.println("Recibe recompensa");
}

if (rango.equals("platino")) {
    System.out.println("Acceso premium");
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

boolean tienePlus = false;
int saldo = 1200;

if (tienePlus) {
    System.out.println("Descuento aplicado");
} else if (saldo >= 1000) {
    System.out.println("Puede comprar juego base");
} else {
    System.out.println("Saldo insuficiente");
}`,
      opciones: [
        { valor: "a", texto: "Descuento aplicado" },
        { valor: "b", texto: "Puede comprar juego base" },
        { valor: "c", texto: "Saldo insuficiente" },
        { valor: "d", texto: "Descuento aplicado\nPuede comprar juego base" },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int ping = 85;

if (ping < 50) {
    System.out.println("Conexión excelente");
} else if (ping < 100) {
    System.out.println("Conexión jugable");
} else {
    System.out.println("Lag alto");
}

if (ping > 80) {
    System.out.println("Revisar conexión");
}`,
      opciones: [
        { valor: "a", texto: "Conexión excelente" },
        { valor: "b", texto: "Lag alto\nRevisar conexión" },
        { valor: "c", texto: "Conexión jugable" },
        { valor: "d", texto: "Conexión jugable\nRevisar conexión" },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

String modo = "online";
int jugadores = 1;

if (modo.equals("online")) {
    if (jugadores >= 2) {
        System.out.println("Partida iniciada");
    } else {
        System.out.println("Esperando jugadores");
    }
} else {
    System.out.println("Modo práctica");
}`,
      opciones: [
        { valor: "a", texto: "Partida iniciada" },
        { valor: "b", texto: "Modo práctica" },
        { valor: "c", texto: "Esperando jugadores" },
        { valor: "d", texto: "Partida iniciada\nEsperando jugadores" },
      ],
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado: `Indica si la afirmación es verdadera o falsa.

En el siguiente código se mostrará el mensaje "Batería baja":

int bateria = 15;

if (bateria < 20)
    if (bateria < 10)
        System.out.println("Batería crítica");
    else
        System.out.println("Batería baja");`,
      opciones: [
        { valor: "v", texto: "Verdadero" },
        { valor: "f", texto: "Falso" },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int eliminaciones = 5;
int asistencias = 3;

if (eliminaciones >= 5) {
    if (asistencias >= 5) {
        System.out.println("MVP total");
    } else {
        System.out.println("Buen ataque");
    }
} else if (asistencias >= 5) {
    System.out.println("Buen apoyo");
} else {
    System.out.println("Seguir practicando");
}`,
      opciones: [
        { valor: "a", texto: "Buen ataque" },
        { valor: "b", texto: "MVP total" },
        { valor: "c", texto: "Buen apoyo" },
        { valor: "d", texto: "Seguir practicando" },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado: `Observa el siguiente código y determina cuál es la salida correcta:

int hora = 23;
boolean tareaHecha = true;

if (hora < 22 && tareaHecha) {
    System.out.println("Puede jugar");
} else if (hora >= 22 && tareaHecha) {
    System.out.println("Solo una partida");
} else {
    System.out.println("Primero la tarea");
}`,
      opciones: [
        { valor: "a", texto: "Puede jugar" },
        { valor: "b", texto: "Solo una partida" },
        { valor: "c", texto: "Primero la tarea" },
        { valor: "d", texto: "Puede jugar\nSolo una partida" },
      ],
    },
  ],
};
