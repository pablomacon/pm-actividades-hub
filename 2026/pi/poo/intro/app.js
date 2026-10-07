const API = window.APP_CONFIG.apiBaseUrl;
const SESSION_KEY = `pm_entregas_session_${window.APP_CONFIG.activitySlug}`;
let sessionToken = sessionStorage.getItem(SESSION_KEY);
let entregas = new Map();

const rows = [
  ["cliente-agencia-viajes", "Cliente de agencia de viajes"],
  ["animal-zoologico", "Animal de zoológico"],
  ["jugador-futbol", "Jugador de fútbol"],
  ["vehiculo", "Vehículo"],
];
const questions = [
  "¿Por qué no todas las características de una persona entran en un programa?",
  "¿Qué diferencia hay entre una clase y un objeto?",
  "¿Qué significa abstraer?",
  "¿Qué diferencia hay entre una característica y un comportamiento de un objeto?",
  "¿Cómo se representan en Java las características necesarias de un objeto?",
  "¿Cómo se representan en Java los comportamientos necesarios de un objeto?",
  "¿Por qué usamos private en los atributos?",
  "¿Qué ventaja tiene separar la información y los comportamientos en clases?",
];
const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
function setStatus(id, type, message) { const el = byId(id); if (el) { el.className = `status-box ${type}`; el.textContent = message; } }
async function post(body) { const response = await fetch(`${API}/entregas`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionToken, activitySlug: window.APP_CONFIG.activitySlug, ...body }) }); const data = await response.json().catch(() => ({})); if (!response.ok || !data.ok) { const error = new Error(data.message || "No se pudo guardar la entrega."); error.status = response.status; throw error; } return data; }
function deliveryState(number) { const delivery = entregas.get(number); return delivery ? `<span class="delivery-state delivered">ENTREGADO ✓</span><p>Última entrega: ${escapeHtml(new Date(delivery.fecha_entrega).toLocaleString("es-UY"))} · versión ${escapeHtml(delivery.numero_version)}</p>` : '<span class="delivery-state">PENDIENTE</span>'; }
function valueFor(exercise, row, field) { return entregas.get(exercise)?.respuesta?.respuestas?.[row]?.[field] || ""; }
function questionValue(number) { return entregas.get(3)?.respuesta?.respuestas?.[`pregunta-${number}`] || ""; }
function tableExercise(number, title, intro, rightHeading) { return `<article class="exercise-card"><header class="exercise-header"><div><h3>Ejercicio ${number}. ${title}</h3><p>${intro}</p></div><div id="state-${number}">${deliveryState(number)}</div></header><form class="form-delivery" data-exercise="${number}"><table class="response-table"><thead><tr><th>Objeto</th><th>${number === 1 ? "Características posibles" : "Comportamientos posibles"}</th><th>${rightHeading}</th></tr></thead><tbody>${rows.map(([key, label]) => `<tr><th scope="row">${label}</th><td><textarea required name="${key}-posibles" placeholder="Escribí varias ideas, una por línea.">${escapeHtml(valueFor(number, key, "posibles"))}</textarea></td><td><textarea required name="${key}-necesarias" placeholder="Elegí las necesarias para el programa.">${escapeHtml(valueFor(number, key, "necesarias"))}</textarea></td></tr>`).join("")}</tbody></table>${actions(number)}</form></article>`; }
function actions(number) { return `<div class="form-actions"><button class="btn" type="submit">${entregas.has(number) ? "Enviar nueva versión" : "Entregar ejercicio"}</button><span class="form-message" aria-live="polite"></span></div>`; }
function questionsExercise() { return `<article class="exercise-card"><header class="exercise-header"><div><h3>Ejercicio 3. Preguntas para pensar</h3><p>Respondé con tus palabras a partir de lo trabajado en esta actividad.</p></div><div id="state-3">${deliveryState(3)}</div></header><form class="form-delivery question-list" data-exercise="3">${questions.map((question, index) => `<label>${index + 1}. ${question}<textarea required name="pregunta-${index + 1}" placeholder="Escribí tu respuesta.">${escapeHtml(questionValue(index + 1))}</textarea></label>`).join("")}${actions(3)}</form></article>`; }
function render() { byId("forms").innerHTML = tableExercise(1, "Características y atributos", "Primero pensá muchas características posibles. Luego elegí las necesarias para el programa indicado.", "Características necesarias para el programa") + tableExercise(2, "Comportamientos y métodos", "Hacé el mismo recorte, pensando ahora en lo que cada objeto puede hacer dentro de un sistema.", "Comportamientos necesarios / métodos del programa") + questionsExercise(); byId("forms").querySelectorAll(".form-delivery").forEach(bindForm); }
function setFormMessage(form, message, type = "") { const target = form.querySelector(".form-message"); target.textContent = message; target.className = `form-message ${type}`; }
function payloadFrom(form, number) { const respuestas = {}; if (number === 3) { questions.forEach((_, index) => { respuestas[`pregunta-${index + 1}`] = form.elements[`pregunta-${index + 1}`].value; }); return { respuestas }; } rows.forEach(([key]) => { respuestas[key] = { posibles: form.elements[`${key}-posibles`].value, necesarias: form.elements[`${key}-necesarias`].value }; }); return { respuestas }; }
function bindForm(form) { form.addEventListener("submit", async (event) => { event.preventDefault(); const number = Number(form.dataset.exercise); const button = form.querySelector("button[type=submit]"); button.disabled = true; try { setFormMessage(form, "Guardando entrega..."); const result = await post({ accion: "guardar-formulario", numeroEjercicio: number, respuesta: payloadFrom(form, number) }); entregas.set(number, { ...result.entrega, respuesta: payloadFrom(form, number) }); render(); setStatus("pageStatus", "success", `Ejercicio ${number}: entrega guardada correctamente.`); } catch (error) { if (error.status === 401) { sessionStorage.removeItem(SESSION_KEY); sessionToken = null; byId("loginCard").hidden = false; byId("activity").hidden = true; } setFormMessage(form, error.message, "error"); } finally { button.disabled = false; } }); }
async function loadState() { const data = await post({ accion: "estado-formulario" }); entregas = new Map((data.entregas || []).map((item) => [Number(item.numero_ejercicio), item])); }
function showActivity(name) { byId("loginCard").hidden = true; byId("activity").hidden = false; setStatus("pageStatus", "info", `Actividad habilitada para ${name || "el estudiante"}.`); render(); }
function startLogin() { AuthService.initGoogleLogin({ onSuccess: async ({ idToken }) => { try { setStatus("loginStatus", "info", "Validando acceso..."); const access = await AuthService.validateAccess({ idToken, slug: window.APP_CONFIG.activitySlug }); if (!access.ok || !access.sessionToken) throw new Error(access.message || "No se pudo crear la sesión."); sessionToken = access.sessionToken; sessionStorage.setItem(SESSION_KEY, sessionToken); await loadState(); showActivity(access.estudiante?.nombre); } catch (error) { setStatus("loginStatus", "error", error.message || "No fue posible habilitar la actividad."); } }, onError: ({ message }) => setStatus("loginStatus", "error", message) }); }
async function restoreSession() { if (!sessionToken) return; try { await loadState(); showActivity(); } catch { sessionStorage.removeItem(SESSION_KEY); sessionToken = null; } }
window.addEventListener("load", () => { startLogin(); restoreSession(); });
