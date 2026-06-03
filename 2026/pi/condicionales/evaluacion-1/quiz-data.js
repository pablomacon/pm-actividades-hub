window.QUIZ_DATA = {
  slug: "condicionales-evaluacion-1",
  titulo: "Evaluación 1 - Variables e if en Java",
  modo: "bloques_codigo",
  puntajeTotal: 15,
  bloques: [
    {
      id: "bloque-1",
      titulo: "Bloque 1 - Variables y condiciones simples",
      lenguaje: "Java",
      codigo: `int edad = 16;
int minimo = 18;

if (edad >= minimo) {
    System.out.println("Puede entrar");
}`,
      preguntas: [
        {
          numero: 1,
          tipo: "radio",
          enunciado: "¿Cuál es una variable del programa?",
          opciones: [
            { valor: "a", texto: "int" },
            { valor: "b", texto: "edad" },
            { valor: "c", texto: "if" },
            { valor: "d", texto: "println" },
            { valor: "e", texto: ">=" },
          ],
        },
        {
          numero: 2,
          tipo: "radio",
          enunciado: "¿Qué valor tiene la variable edad?",
          opciones: [
            { valor: "a", texto: "18" },
            { valor: "b", texto: "16" },
            { valor: "c", texto: "minimo" },
            { valor: "d", texto: "verdadero" },
            { valor: "e", texto: "falso" },
          ],
        },
        {
          numero: 3,
          tipo: "radio",
          enunciado: "¿Qué se muestra en pantalla al ejecutar este código?",
          opciones: [
            { valor: "a", texto: "Puede entrar" },
            { valor: "b", texto: "No puede entrar" },
            { valor: "c", texto: "edad >= minimo" },
            { valor: "d", texto: "No se muestra nada" },
            { valor: "e", texto: "Error porque falta else" },
          ],
        },
      ],
    },
    {
      id: "bloque-2",
      titulo: "Bloque 2 - if...else y predicción de salida",
      lenguaje: "Java",
      codigo: `int nota = 5;

if (nota >= 6) {
    System.out.println("Aprobado");
} else {
    System.out.println("Debe seguir practicando");
}`,
      preguntas: [
        {
          numero: 4,
          tipo: "radio",
          enunciado: "¿Cuál es la variable principal que se evalúa en el if?",
          opciones: [
            { valor: "a", texto: "int" },
            { valor: "b", texto: "nota" },
            { valor: "c", texto: "System" },
            { valor: "d", texto: "Aprobado" },
            { valor: "e", texto: "else" },
          ],
        },
        {
          numero: 5,
          tipo: "radio",
          enunciado: "La condición nota >= 6 es:",
          opciones: [
            { valor: "a", texto: "Verdadera" },
            { valor: "b", texto: "Falsa" },
          ],
        },
        {
          numero: 6,
          tipo: "radio",
          enunciado: "¿Qué bloque se ejecuta?",
          opciones: [
            { valor: "a", texto: "El bloque del if" },
            { valor: "b", texto: "El bloque del else" },
            { valor: "c", texto: "Los dos bloques" },
            { valor: "d", texto: "Ningún bloque" },
            { valor: "e", texto: "El bloque de Scanner" },
          ],
        },
      ],
    },
    {
      id: "bloque-3",
      titulo: "Bloque 3 - Scanner, entrada del usuario y salida por consola",
      lenguaje: "Java",
      codigo: `import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese su edad: ");
        int edad = sc.nextInt();

        if (edad >= 18) {
            System.out.println("Está habilitado para votar");
        } else {
            System.out.println("Debe ser mayor de edad para votar");
        }
    }
}`,
      preguntas: [
        {
          numero: 7,
          tipo: "radio",
          enunciado: "¿Para qué se usa Scanner en este programa?",
          opciones: [
            { valor: "a", texto: "Para mostrar texto en pantalla" },
            { valor: "b", texto: "Para guardar una condición" },
            { valor: "c", texto: "Para leer datos que ingresa el usuario" },
            { valor: "d", texto: "Para crear una clase" },
            { valor: "e", texto: "Para cerrar el programa" },
          ],
        },
        {
          numero: 8,
          tipo: "radio",
          enunciado: "¿Qué instrucción guarda el número que escribe el usuario?",
          opciones: [
            { valor: "a", texto: "System.out.print(\"Ingrese su edad: \" );" },
            { valor: "b", texto: "int edad = sc.nextInt();" },
            { valor: "c", texto: "if (edad >= 18)" },
            { valor: "d", texto: "System.out.println(\"Está habilitado para votar\");" },
            { valor: "e", texto: "import java.util.Scanner;" },
          ],
        },
        {
          numero: 9,
          tipo: "radio",
          enunciado: "Si el usuario ingresa 16, ¿qué mensaje se muestra?",
          opciones: [
            { valor: "a", texto: "Está habilitado para votar" },
            { valor: "b", texto: "Debe ser mayor de edad para votar" },
            { valor: "c", texto: "Ingrese su edad:" },
            { valor: "d", texto: "edad >= 18" },
            { valor: "e", texto: "Error siempre" },
          ],
        },
      ],
    },
    {
      id: "bloque-4",
      titulo: "Bloque 4 - if...else if...else, sintaxis y errores",
      lenguaje: "Java",
      codigo: `import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese una nota del 1 al 10: ");
        int nota = sc.nextInt();

        if (nota < 1 || nota > 10) {
            System.out.println("Nota incorrecta");
        } else if (nota == 10) {
            System.out.println("Excelente");
        } else if (nota >= 7) {
            System.out.println("Muy bien");
        } else if (nota >= 5) {
            System.out.println("Aceptable");
        } else {
            System.out.println("Debe seguir practicando");
        }
    }
}`,
      preguntas: [
        {
          numero: 10,
          tipo: "radio",
          enunciado: "¿Qué hace la primera condición if (nota < 1 || nota > 10)?",
          opciones: [
            { valor: "a", texto: "Verifica si la nota es excelente" },
            { valor: "b", texto: "Verifica si la nota está fuera del rango permitido" },
            { valor: "c", texto: "Verifica si la nota es exactamente 10" },
            { valor: "d", texto: "Verifica si la nota es aceptable" },
            { valor: "e", texto: "Guarda la nota ingresada" },
          ],
        },
        {
          numero: 11,
          tipo: "radio",
          enunciado: "El operador || significa:",
          opciones: [
            { valor: "a", texto: "Y" },
            { valor: "b", texto: "O" },
            { valor: "c", texto: "No" },
            { valor: "d", texto: "Igual" },
            { valor: "e", texto: "Mayor o igual" },
          ],
        },
        {
          numero: 12,
          tipo: "radio",
          enunciado: "Si el usuario ingresa 11, ¿qué se muestra?",
          opciones: [
            { valor: "a", texto: "Excelente" },
            { valor: "b", texto: "Muy bien" },
            { valor: "c", texto: "Aceptable" },
            { valor: "d", texto: "Nota incorrecta" },
            { valor: "e", texto: "Debe seguir practicando" },
          ],
        },
      ],
    },
    {
      id: "bloque-5",
      titulo: "Bloque 5 - Completar código y corregir errores",
      lenguaje: "Java",
      codigo: `// Fragmento 1
if (______________) {
    System.out.println("Mayor de edad");
}

// Fragmento 2
Scanner sc = new Scanner(System.in);
System.out.print("Ingrese un número: ");
int numero = ______________;

// Fragmento 3
public class App {
    public static void Main(String[] args) {
        System.out.println("Hola");
    }
}`,
      preguntas: [
        {
          numero: 13,
          tipo: "radio",
          enunciado: "Queremos que el programa muestre “Mayor de edad” si edad es 18 o más. ¿Qué condición falta?",
          opciones: [
            { valor: "a", texto: "edad = 18" },
            { valor: "b", texto: "edad >= 18" },
            { valor: "c", texto: "edad mayor a 18" },
            { valor: "d", texto: "edad => 18" },
            { valor: "e", texto: "18 >=" },
          ],
        },
        {
          numero: 14,
          tipo: "radio",
          enunciado: "Queremos leer un número entero ingresado por el usuario. ¿Qué línea falta?",
          opciones: [
            { valor: "a", texto: "Scanner.nextInt();" },
            { valor: "b", texto: "sc.nextInt();" },
            { valor: "c", texto: "System.out.println();" },
            { valor: "d", texto: "numero.nextInt();" },
            { valor: "e", texto: "nextInt.sc();" },
          ],
        },
        {
          numero: 15,
          tipo: "radio",
          enunciado: "¿Cuál línea tiene un error en el Fragmento 3?",
          opciones: [
            { valor: "a", texto: "public class App {" },
            { valor: "b", texto: "public static void Main(String[] args) {" },
            { valor: "c", texto: "System.out.println(\"Hola\");" },
            { valor: "d", texto: "La última llave" },
            { valor: "e", texto: "No hay error" },
          ],
        },
      ],
    },
  ],
};
