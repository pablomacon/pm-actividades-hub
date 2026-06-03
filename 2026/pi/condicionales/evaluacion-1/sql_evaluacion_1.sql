-- Evaluación 1 - Variables e if en Java
-- Slug: condicionales-evaluacion-1

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
  'condicionales-evaluacion-1',
  'Evaluación 1 - Variables e if en Java',
  TRUE,
  2026,
  'pi',
  'condicionales',
  101,
  '/2026/pi/condicionales/evaluacion-1/',
  'Evaluación por bloques de código sobre variables, Scanner e if en Java.'
);

INSERT INTO preguntas (actividad_slug, numero_pregunta, respuesta_correcta)
VALUES
('condicionales-evaluacion-1', 1, 'b'),
('condicionales-evaluacion-1', 2, 'b'),
('condicionales-evaluacion-1', 3, 'd'),
('condicionales-evaluacion-1', 4, 'b'),
('condicionales-evaluacion-1', 5, 'b'),
('condicionales-evaluacion-1', 6, 'b'),
('condicionales-evaluacion-1', 7, 'c'),
('condicionales-evaluacion-1', 8, 'b'),
('condicionales-evaluacion-1', 9, 'b'),
('condicionales-evaluacion-1', 10, 'b'),
('condicionales-evaluacion-1', 11, 'b'),
('condicionales-evaluacion-1', 12, 'd'),
('condicionales-evaluacion-1', 13, 'b'),
('condicionales-evaluacion-1', 14, 'b'),
('condicionales-evaluacion-1', 15, 'b');

-- Asignación: completar luego con los estudiantes de la mitad del grupo.
-- Ejemplo por lista manual:
-- INSERT INTO realiza (estudiante_id, actividad_id, habilitada)
-- SELECT e.id, a.id, TRUE
-- FROM estudiantes e
-- JOIN actividades a ON a.slug = 'condicionales-evaluacion-1'
-- WHERE e.id IN (...);
