-- Evaluación 2 - Variables e if en Java
-- Slug: condicionales-evaluacion-2

INSERT INTO actividades (
  slug,
  titulo,
  activa,
  anio,
  asignatura,
  tema,
  orden,
  url,
  descripcion
)
VALUES (
  'condicionales-evaluacion-2',
  'Evaluación 2 - Variables e if en Java',
  TRUE,
  2026,
  'pi',
  'condicionales',
  102,
  '/2026/pi/condicionales/evaluacion-2/',
  'Evaluación alternativa por bloques de código sobre variables, Scanner e if en Java.'
);

INSERT INTO preguntas (actividad_slug, numero_pregunta, respuesta_correcta)
VALUES
('condicionales-evaluacion-2', 1, 'b'),
('condicionales-evaluacion-2', 2, 'c'),
('condicionales-evaluacion-2', 3, 'd'),
('condicionales-evaluacion-2', 4, 'b'),
('condicionales-evaluacion-2', 5, 'b'),
('condicionales-evaluacion-2', 6, 'c'),
('condicionales-evaluacion-2', 7, 'b'),
('condicionales-evaluacion-2', 8, 'b'),
('condicionales-evaluacion-2', 9, 'c'),
('condicionales-evaluacion-2', 10, 'b'),
('condicionales-evaluacion-2', 11, 'd'),
('condicionales-evaluacion-2', 12, 'a'),
('condicionales-evaluacion-2', 13, 'a'),
('condicionales-evaluacion-2', 14, 'a'),
('condicionales-evaluacion-2', 15, 'a');

-- Asignación: completar luego con los estudiantes de la otra mitad del grupo.
-- Ejemplo por lista manual:
-- INSERT INTO realiza (estudiante_id, actividad_id, habilitada)
-- SELECT e.id, a.id, TRUE
-- FROM estudiantes e
-- JOIN actividades a ON a.slug = 'condicionales-evaluacion-2'
-- WHERE e.id IN (...);
