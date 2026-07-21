window.QUIZ_DATA = {
  slug: "modelo-01",
  titulo: "Relaciones entre clases y creación de objetos",
  puntajeTotal: 10,
  preguntas: [
    {
      numero: 1,
      tipo: "radio",
      enunciado: "En un sistema para administrar una biblioteca aparecen las clases Libro, Socio, Prestamo y VentanaPrincipal. Todas ellas deberían considerarse clases del modelo porque forman parte del mismo programa.",
      opciones: [
        { valor: "verdadero", texto: "Verdadero" },
        { valor: "falso", texto: "Falso" },
      ],
    },
    {
      numero: 2,
      tipo: "radio",
      enunciado: "Una Venta está formada por varios DetalleVenta. Cada detalle registra un producto, una cantidad y un precio, y solo tiene sentido como parte de una venta determinada. ¿Cuál es la relación más adecuada entre Venta y DetalleVenta?",
      opciones: [
        { valor: "a", texto: "A. Herencia" },
        { valor: "b", texto: "B. Agregación" },
        { valor: "c", texto: "C. Composición" },
        { valor: "d", texto: "D. No debería existir ninguna relación entre ellas" },
      ],
    },
    {
      numero: 3,
      tipo: "radio",
      enunciado: "Cliente y Vendedor tienen los atributos nombre, documento y teléfono. Se crea Persona para reunir esas características comunes, y Cliente y Vendedor heredan de ella. ¿Qué razonamiento llevó principalmente a esta modificación?",
      opciones: [
        { valor: "a", texto: "A. Se identificaron características comunes y se creó una clase más general." },
        { valor: "b", texto: "B. Se convirtió una composición en una agregación." },
        { valor: "c", texto: "C. Se decidió que Persona debía contener objetos Cliente." },
        { valor: "d", texto: "D. Se crearon objetos nuevos para evitar constructores." },
      ],
    },
    {
      numero: 4,
      tipo: "radio",
      enunciado: "Dada una clase Producto con constructor, la instrucción `Producto producto;` crea una instancia de la clase Producto.",
      opciones: [
        { valor: "verdadero", texto: "Verdadero" },
        { valor: "falso", texto: "Falso" },
      ],
    },
    {
      numero: 5,
      tipo: "radio",
      enunciado: "Una Biblioteca mantiene una colección de objetos Libro. Los libros pueden existir antes de ser incorporados a una biblioteca y luego trasladarse a otra. ¿Qué relación representa mejor esta situación?",
      opciones: [
        { valor: "a", texto: "A. Herencia" },
        { valor: "b", texto: "B. Composición" },
        { valor: "c", texto: "C. Especialización" },
        { valor: "d", texto: "D. Agregación" },
      ],
    },
    {
      numero: 6,
      tipo: "radio",
      enunciado: "Existe una clase Entrada con código y precio. EntradaGeneral, EntradaEstudiante y EntradaVIP tienen reglas propias. Este diseño puede entenderse como especialización: se parte de un concepto general y se crean tipos más específicos.",
      opciones: [
        { valor: "verdadero", texto: "Verdadero" },
        { valor: "falso", texto: "Falso" },
      ],
    },
    {
      numero: 7,
      tipo: "radio",
      enunciado: "Un estudiante propone que Computadora herede de Procesador porque toda computadora tiene un procesador. ¿Cuál es el mejor análisis?",
      opciones: [
        { valor: "a", texto: "A. Es correcto porque todo objeto que contiene otro debe utilizar herencia." },
        { valor: "b", texto: "B. No es adecuado: una computadora tiene un procesador; corresponde analizar composición o agregación." },
        { valor: "c", texto: "C. Es correcto siempre que Procesador tenga atributos privados." },
        { valor: "d", texto: "D. No pueden existir relaciones entre esas dos clases." },
      ],
    },
    {
      numero: 8,
      tipo: "radio",
      enunciado: "Observá el código: Cliente cliente1 = new Cliente(\"Ana\"); Cliente cliente2 = new Cliente(\"Luis\"); Cliente cliente3 = cliente1; ¿Cuántos objetos Cliente diferentes fueron creados con new?",
      opciones: [
        { valor: "a", texto: "A. 3" },
        { valor: "b", texto: "B. 1" },
        { valor: "c", texto: "C. 2" },
        { valor: "d", texto: "D. Ninguno" },
      ],
    },
    {
      numero: 9,
      tipo: "radio",
      enunciado: "En un sistema para gestionar torneos estudiantiles se identifican Equipo, Jugador, Partido y Arbitro. Para decidir si serán clases del modelo, no alcanza con buscar sustantivos: también hay que analizar si el sistema necesita guardar información o representar comportamientos relacionados.",
      opciones: [
        { valor: "verdadero", texto: "Verdadero" },
        { valor: "falso", texto: "Falso" },
      ],
    },
    {
      numero: 10,
      tipo: "radio",
      enunciado: "Persona puede existir sin ser Cliente; Cliente es un tipo de Persona; cada Cliente realiza varias Compra; y cada Compra contiene varios DetalleCompra que no tienen sentido fuera de ella. ¿Qué combinación representa mejor las relaciones?",
      opciones: [
        { valor: "a", texto: "A. Persona–Cliente: composición; Cliente–Compra: herencia; Compra–DetalleCompra: agregación." },
        { valor: "b", texto: "B. Persona–Cliente: herencia; Cliente–Compra: asociación/agregación; Compra–DetalleCompra: composición." },
        { valor: "c", texto: "C. Todas las relaciones deberían representarse mediante herencia." },
        { valor: "d", texto: "D. Persona–Cliente: agregación; Cliente–Compra: composición; Compra–DetalleCompra: herencia." },
      ],
    },
  ],
};
