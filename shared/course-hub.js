const API = window.APP_CONFIG.apiBaseUrl;
const loginBox = document.getElementById("loginBox");
const contenedor = document.getElementById("actividadesContainer");
const loginStatus = document.getElementById("loginStatus");
const logoutBtn = document.getElementById("logoutBtn");
let idToken = sessionStorage.getItem("pm_id_token");

function escapeHtml(value) { return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }
function getSafeActivityUrl(value) {
  try {
    const rawUrl = String(value || "");
    const moduleIndex = window.location.pathname.indexOf("/2026/");
    const projectBasePath = moduleIndex >= 0 ? window.location.pathname.slice(0, moduleIndex + 1) : "/";
    const activityUrl = rawUrl.startsWith("/2026/") ? `${projectBasePath}${rawUrl.slice(1)}` : rawUrl;
    const url = new URL(activityUrl, window.location.href);
    return url.origin === window.location.origin ? url.href : "#";
  } catch { return "#"; }
}
function buildRevisionUrl(activityUrl) {
  if (activityUrl === "#") return "#";
  const url = new URL(activityUrl); url.searchParams.set("modo", "revision"); return url.href;
}
function mostrarMensajeLogin(mensaje) { if (loginStatus) loginStatus.textContent = mensaje || ""; }
function cerrarSesionSegura() {
  sessionStorage.removeItem("pm_id_token");
  ["pm_id_token", "estudiante", "currentStudent", "ayudante_estudiante", "ayudante_user"].forEach((key) => localStorage.removeItem(key));
  if (window.google?.accounts?.id) google.accounts.id.disableAutoSelect();
  idToken = null; loginBox.style.display = "block"; contenedor.style.display = "none";
  mostrarMensajeLogin("Sesión cerrada. En una computadora compartida, revisá también que tu cuenta de Google no haya quedado abierta en el navegador.");
  iniciarLoginGoogle();
}
function iniciarLoginGoogle() {
  AuthService.initGoogleLogin({
    onSuccess: ({ idToken: token }) => { idToken = token; sessionStorage.setItem("pm_id_token", idToken); mostrarMensajeLogin("Inicio de sesión correcto. Cargando actividades..."); cargarActividades(); },
    onError: ({ message }) => mostrarMensajeLogin(message || "No se pudo iniciar sesión con Google."),
  });
}
async function cargarActividades() {
  try {
    const res = await fetch(`${API}/actividades/estudiante`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken, anio: 2026, asignatura: window.APP_CONFIG.asignatura }) });
    const data = await res.json();
    if (!data.ok) throw new Error(data.message || "No se pudo validar el acceso.");
    loginBox.style.display = "none"; contenedor.style.display = "grid"; renderActividades(data.actividades);
  } catch (error) {
    console.error(error); sessionStorage.removeItem("pm_id_token"); idToken = null;
    loginBox.style.display = "block"; contenedor.style.display = "none";
    mostrarMensajeLogin(error.message || "Error al conectar con el servidor."); iniciarLoginGoogle();
  }
}
function renderBotonesActividad(actividad, intentos) {
  const urlActividad = getSafeActivityUrl(actividad.url); const urlRevision = buildRevisionUrl(urlActividad);
  if (intentos === 0) return `<a href="${urlActividad}" class="btn">Entrar</a>`;
  if (intentos === 1) return `<div class="button-row"><a href="${urlActividad}" class="btn">Realizar segundo intento</a><a href="${urlRevision}" class="btn btn-done">Ver mejor intento</a></div>`;
  return `<a href="${urlRevision}" class="btn btn-done">Ver mejor intento</a>`;
}
function renderActividades(actividades) {
  contenedor.innerHTML = actividades.map((actividad) => {
    const intentos = Number(actividad.intentos_realizados || 0) || 0; const realizada = intentos > 0; const agotada = intentos >= 2;
    const estado = !realizada ? "Pendiente" : agotada ? "Realizada" : "Realizada: queda un intento disponible";
    const info = realizada ? `<p><strong>Mejor:</strong> ${actividad.mejor_porcentaje}%</p><p><strong>Intentos:</strong> ${intentos} de 2</p>` : `<p><strong>Intentos:</strong> 0 de 2</p>`;
    return `<article class="card ${realizada ? "card-realizada" : "card-pendiente"}"><h3>${escapeHtml(actividad.titulo)}</h3><p>${escapeHtml(actividad.descripcion)}</p><p><strong>Estado:</strong> ${estado}</p>${info}${renderBotonesActividad(actividad, intentos)}</article>`;
  }).join("");
}
if (logoutBtn) logoutBtn.addEventListener("click", cerrarSesionSegura);
if (idToken) cargarActividades(); else window.addEventListener("load", iniciarLoginGoogle);
