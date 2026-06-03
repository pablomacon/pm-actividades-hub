window.QUIZ_DATA = {
  slug: "condicionales-evaluacion-2",
  titulo: "Evaluación 2 - Variables e if en Java",
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
          enunciado: "¿Qué valor tiene la variable minimo?",
          opciones: [
            { valor: "a", texto: "16" },
            { valor: "b", texto: "18" },
            { valor: "c", texto: "edad" },
            { valor: "d", texto: "Puede entrar" },
            { valor: "e", texto: "No tiene valor" },
          ],
        },
        {
          numero: 2,
          tipo: "radio",
          enunciado: "La condición edad >= minimo significa:",
          opciones: [
            { valor: "a", texto: "edad es menor que minimo" },
            { valor: "b", texto: "edad es igual a minimo solamente" },
            { valor: "c", texto: "edad es mayor o igual que minimo" },
            { valor: "d", texto: "edad guarda el valor de minimo" },
            { valor: "e", texto: "edad es distinta de minimo" },
          ],
        },
        {
          numero: 3,
          tipo: "radio",
          enunciado: "¿Qué cambio haría que se mostrara \"Puede entrar\"?",
          opciones: [
            { valor: "a", texto: "int edad = 15;" },
            { valor: "b", texto: "int edad = 16;" },
            { valor: "c", texto: "int edad = 17;" },
            { valor: "d", texto: "int edad = 18;" },
            { valor: "e", texto: "int minimo = 20;" },
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
          enunciado: "Si cambiamos int nota = 5; por int nota = 6;, ¿qué se mostraría?",
          opciones: [
            { valor: "a", texto: "Debe seguir practicando" },
            { valor: "b", texto: "Aprobado" },
            { valor: "c", texto: "Nada" },
            { valor: "d", texto: "Error" },
            { valor: "e", texto: "nota" },
          ],
        },
        {
          numero: 5,
          tipo: "radio",
          enunciado: "Si la condición fuera nota > 6, con nota = 6, ¿qué pasaría?",
          opciones: [
            { valor: "a", texto: "Mostraría Aprobado" },
            { valor: "b", texto: "Mostraría Debe seguir practicando" },
            { valor: "c", texto: "Mostraría los dos mensajes" },
            { valor: "d", texto: "Daría error por usar >" },
            { valor: "e", texto: "No se puede saber" },
          ],
        },
        {
          numero: 6,
          tipo: "radio",
          enunciado: "¿Cuál condición representa mejor “aprueba con 6 o más”?",
          opciones: [
            { valor: "a", texto: "nota > 6" },
            { valor: "b", texto: "nota < 6" },
            { valor: "c", texto: "nota >= 6" },
            { valor: "d", texto: "nota == 6" },
            { valor: "e", texto: "nota = 6" },
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
          enunciado: "¿Cuál es la diferencia entre System.out.print y System.out.println en este ejemplo?",
          opciones: [
            { valor: "a", texto: "print lee datos y println guarda datos" },
            { valor: "b", texto: "print no cambia de línea y println sí cambia de línea" },
            { valor: "c", texto: "print solo sirve con números" },
            { valor: "d", texto: "println solo sirve con condiciones" },
            { valor: "e", texto: "No hay diferencia" },
          ],
        },
        {
          numero: 8,
          tipo: "radio",
          enunciado: "¿Qué tipo de dato se espera cuando se usa sc.nextInt()?",
          opciones: [
            { valor: "a", texto: "Texto" },
            { valor: "b", texto: "Número entero" },
            { valor: "c", texto: "Verdadero o falso" },
            { valor: "d", texto: "Una clase" },
            { valor: "e", texto: "Una condición completa" },
          ],
        },
        {
          numero: 9,
          tipo: "radio",
          enunciado: "¿Qué pasaría si el usuario escribe una palabra en lugar de un número?",
          opciones: [
            { valor: "a", texto: "El programa la guarda sin problema en edad" },
            { valor: "b", texto: "El programa muestra automáticamente “Debe ser mayor de edad para votar”" },
            { valor: "c", texto: "Puede producirse un error porque nextInt() espera un número entero" },
            { valor: "d", texto: "Java convierte la palabra en número" },
            { valor: "e", texto: "Se ejecutan los dos bloques" },
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
          enunciado: "Si el usuario ingresa 10, ¿qué se muestra?",
          opciones: [
            { valor: "a", texto: "Nota incorrecta" },
            { valor: "b", texto: "Excelente" },
            { valor: "c", texto: "Muy bien" },
            { valor: "d", texto: "Aceptable" },
            { valor: "e", texto: "Debe seguir practicando" },
          ],
        },
        {
          numero: 11,
          tipo: "radio",
          enunciado: "Si el usuario ingresa 5, ¿qué se muestra?",
          opciones: [
            { valor: "a", texto: "Nota incorrecta" },
            { valor: "b", texto: "Excelente" },
            { valor: "c", texto: "Muy bien" },
            { valor: "d", texto: "Aceptable" },
            { valor: "e", texto: "Debe seguir practicando" },
          ],
        },
        {
          numero: 12,
          tipo: "radio",
          enunciado: "Verdadero o falso: cuando una condición se cumple en una cadena if...else if...else, Java ya no revisa las demás condiciones de esa misma cadena.",
          opciones: [
            { valor: "a", texto: "Verdadero" },
            { valor: "b", texto: "Falso" },
          ],
        },
      ],
    },
    {
      id: "bloque-5",
      titulo: "Bloque 5 - Completar código y corregir errores",
      lenguaje: "Java",
      codigo: `// Fragmento 1
System.out.println("Hola")

// Fragmento 2
if (edad >= 18) {
    System.out.println("Mayor de edad");
else {
    System.out.println("Menor de edad");
}

// Fragmento 3
if (nota < 1 || nota > 10) {
    System.out.println("Nota incorrecta");
}`,
      preguntas: [
        {
          numero: 13,
          tipo: "radio",
          enunciado: "¿Qué error tiene el Fragmento 1?",
          opciones: [
            { valor: "a", texto: "Falta el punto y coma ;" },
            { valor: "b", texto: "Falta la palabra class" },
            { valor: "c", texto: "println está mal escrito siempre" },
            { valor: "d", texto: "No puede mostrar texto" },
            { valor: "e", texto: "Falta Scanner" },
          ],
        },
        {
          numero: 14,
          tipo: "radio",
          enunciado: "¿Qué error tiene el Fragmento 2?",
          opciones: [
            { valor: "a", texto: "Falta cerrar la llave } antes del else" },
            { valor: "b", texto: "else debe escribirse con mayúscula" },
            { valor: "c", texto: "if no puede usar condiciones" },
            { valor: "d", texto: "println no puede ir dentro de un if" },
            { valor: "e", texto: "Falta importar Scanner" },
          ],
        },
        {
          numero: 15,
          tipo: "radio",
          enunciado: "¿Por qué conviene revisar primero si la nota está fuera de rango, como en el Fragmento 3?",
          opciones: [
            { valor: "a", texto: "Porque así evitamos clasificar como válida una nota incorrecta" },
            { valor: "b", texto: "Porque Java obliga a empezar siempre con <" },
            { valor: "c", texto: "Porque else if no funciona con números" },
            { valor: "d", texto: "Porque Scanner solo permite notas incorrectas" },
            { valor: "e", texto: "Porque println necesita una validación antes" },
          ],
        },
      ],
    },
  ],
};
