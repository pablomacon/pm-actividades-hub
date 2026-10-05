const API = window.APP_CONFIG.apiBaseUrl;
const MAX_BYTES = window.APP_CONFIG.entregaMaxBytes;
const ALLOWED_EXTENSIONS = new Set(["zip", "jpg", "jpeg", "png", "txt", "java"]);
const SESSION_STORAGE_KEY = "pm_entregas_session";
let sessionToken = sessionStorage.getItem(SESSION_STORAGE_KEY);
let entregas = new Map();
let bloqueActual = 1;

const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
function setStatus(id, type, message) { const el = byId(id); if (el) { el.className = `status-box ${type}`; el.textContent = message; } }
async function post(path, body) {
  let response;
  try {
    response = await fetch(`${API}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionToken, ...body }) });
  } catch (cause) {
    const error = new Error("No pudimos comunicarnos con el servidor. Estamos comprobando si la entrega quedó guardada.");
    error.isNetworkError = true;
    error.cause = cause;
    throw error;
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) {
    const error = new Error(data.message || "No se pudo completar la operación.");
    error.status = response.status;
    throw error;
  }
  return data;
}
function blockOf(numero) { return Math.ceil(numero / 10); }
function renderTabs() {
  byId("blockTabs").innerHTML = [1,2,3,4,5].map((block) => `<button class="block-tab" type="button" data-block="${block}" aria-selected="${block === bloqueActual}">Bloque ${block} · ${ARREGLOS_STRINGS_EJERCICIOS[(block-1)*10].nivel}</button>`).join("");
  byId("blockTabs").querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { bloqueActual = Number(button.dataset.block); render(); }));
}
function renderExercise(ejercicio) {
  const delivery = entregas.get(ejercicio.numero);
  const state = delivery ? `<span class="delivery-state delivered">ENTREGADO ✓</span><p>Última entrega: ${escapeHtml(new Date(delivery.fecha_entrega).toLocaleString("es-UY"))} · versión ${delivery.numero_version}</p>` : `<span class="delivery-state">PENDIENTE</span>`;
  const help = ejercicio.ayudas.length ? `<h3>${escapeHtml(ejercicio.ayudaTitulo)}</h3><ol class="help-list">${ejercicio.ayudas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>` : "";
  return `<article class="exercise-card"><header class="exercise-header"><div><h2>Ejercicio ${String(ejercicio.numero).padStart(2,"0")} — ${escapeHtml(ejercicio.titulo)}</h2><div class="exercise-meta"><span class="pill">${escapeHtml(ejercicio.tipo)}</span><span class="pill">${escapeHtml(ejercicio.nivel)}</span><span class="pill">${escapeHtml(ejercicio.archivo)}</span></div></div><div>${state}</div></header><h3>Problema</h3><p>${escapeHtml(ejercicio.problema)}</p><h3>Practicás</h3><p>${escapeHtml(ejercicio.practicas)}</p>${help}<h3>Para explicar</h3><p>${escapeHtml(ejercicio.paraExplicar)}</p><form class="delivery-form" data-exercise="${ejercicio.numero}"><h3>Entregá tu programa</h3><div class="evidence-options"><label><input type="radio" name="evidence-${ejercicio.numero}" value="file" checked /> Subir archivo</label><label><input type="radio" name="evidence-${ejercicio.numero}" value="text" /> Escribir el programa</label></div><div class="file-evidence"><input type="file" accept=".zip,.jpg,.jpeg,.png,.txt,.java" /><small>Formatos: .zip, .jpg, .jpeg, .png, .txt o .java. Máximo ${Math.round(MAX_BYTES/1024/1024)} MB.</small></div><div class="text-evidence" hidden><label>Código o programa<textarea name="codigo" spellcheck="false" placeholder="Pegá o escribí tu programa Java aquí."></textarea></label></div><label>Respuesta para explicar (obligatoria)<textarea name="explicacion" required placeholder="Respondé aquí la pregunta “Para explicar”."></textarea></label><div class="form-actions"><button class="btn" type="submit">Guardar entrega</button><span class="form-message" aria-live="polite"></span></div></form></article>`;
}
function render() {
  renderTabs();
  byId("exercisesContainer").innerHTML = ARREGLOS_STRINGS_EJERCICIOS.filter((item) => blockOf(item.numero) === bloqueActual).map(renderExercise).join("");
  byId("exercisesContainer").querySelectorAll(".delivery-form").forEach(bindForm);
}
function setFormMessage(form, text, type = "") { const el = form.querySelector(".form-message"); el.textContent = text; el.className = `form-message ${type}`; }
function bindForm(form) {
  const fileBox = form.querySelector(".file-evidence"), textBox = form.querySelector(".text-evidence");
  form.querySelectorAll('input[type="radio"]').forEach((radio) => radio.addEventListener("change", () => { fileBox.hidden = radio.value !== "file" || !radio.checked; textBox.hidden = radio.value !== "text" || !radio.checked; }));
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); const numeroEjercicio = Number(form.dataset.exercise); const type = form.querySelector('input[type="radio"]:checked').value; const explicacion = form.elements.explicacion.value.trim(); const submit = form.querySelector("button[type=submit]");
    if (!explicacion) return setFormMessage(form, "La respuesta “Para explicar” es obligatoria.", "error");
    submit.disabled = true;
    try {
      let result;
      if (type === "text") {
        const codigo = form.elements.codigo.value.trim();
        if (!codigo) throw new Error("Escribí el programa antes de entregarlo.");
        setFormMessage(form, "Guardando…");
        result = await post("/entregas", { accion: "guardar-texto", numeroEjercicio, codigoTexto: codigo, respuestaExplicacion: explicacion });
      } else {
        const file = form.querySelector('input[type=file]').files[0];
        validateFile(file);
        setFormMessage(form, "Iniciando subida…");
        const start = await post("/entregas", { accion: "iniciar-upload", numeroEjercicio, nombreOriginal: file.name, mimeType: file.type || "application/octet-stream", tamanioBytes: file.size });
        let metadata;
        try {
          setFormMessage(form, "Subiendo archivo a Drive…");
          metadata = await resumableUpload(start.uploadUrl, file, (percent) => setFormMessage(form, `Subiendo a Drive… ${percent}%`));
        } catch (uploadError) {
          setFormMessage(form, "La respuesta de Drive se interrumpió. Comprobando la entrega…");
          result = await post("/entregas", { accion: "confirmar-upload", uploadToken: start.uploadToken, uploadUrl: start.uploadUrl, respuestaExplicacion: explicacion });
        }
        if (!result) {
          setFormMessage(form, "Confirmando entrega…");
          result = await confirmUpload(start.uploadToken, metadata.id, explicacion);
        }
      }

      entregas.set(numeroEjercicio, { numero_ejercicio: numeroEjercicio, numero_version: result.entrega.numero_version, fecha_entrega: result.entrega.fecha_entrega, tipo_evidencia: type === "text" ? "texto" : "archivo" });
      render();
      setStatus("pageStatus", "success", `Ejercicio ${numeroEjercicio}: entrega guardada correctamente. No es necesario volver a enviarla.`);
    } catch (error) {
      if (error.status === 401) {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        sessionToken = null;
        byId("loginCard").hidden = false;
        setStatus("loginStatus", "error", error.message);
      }
      setFormMessage(form, error.message || "No se pudo guardar la entrega.", "error");
    } finally { submit.disabled = false; }
  });
}
function validateFile(file) { if (!file) throw new Error("Elegí un archivo como evidencia."); const ext = file.name.split(".").pop().toLowerCase(); if (!ALLOWED_EXTENSIONS.has(ext)) throw new Error("El formato no está permitido. No se admite .class como archivo individual."); if (file.size > MAX_BYTES) throw new Error(`El archivo supera el máximo de ${Math.round(MAX_BYTES/1024/1024)} MB.`); }
async function resumableUpload(uploadUrl, file, progress) { const chunkSize = 8 * 1024 * 1024; let offset = 0, metadata; while (offset < file.size) { const end = Math.min(offset + chunkSize, file.size); const response = await fetch(uploadUrl, { method: "PUT", headers: { "Content-Length": String(end-offset), "Content-Range": `bytes ${offset}-${end-1}/${file.size}` }, body: file.slice(offset,end) }); if (response.status === 308) { const range = response.headers.get("Range"); const received = range?.match(/bytes=0-(\d+)/); offset = received ? Number(received[1]) + 1 : end; progress(Math.round((offset/file.size)*100)); continue; } if (!response.ok) throw new Error("Drive no pudo recibir el archivo."); metadata = await response.json(); offset = end; progress(100); } return metadata; }
async function confirmUpload(uploadToken, driveFileId, respuestaExplicacion) {
  const body = { accion: "confirmar-upload", uploadToken, driveFileId, respuestaExplicacion };
  try {
    return await post("/entregas", body);
  } catch (error) {
    if (!error.isNetworkError) throw error;
    return post("/entregas", body);
  }
}
async function loadState() { const data = await post("/entregas", { accion: "estado" }); entregas = new Map((data.entregas || []).map((item) => [Number(item.numero_ejercicio), item])); }
function showDeliveryApp(studentName) { byId("loginCard").hidden = true; byId("deliveryApp").hidden = false; setStatus("pageStatus","info",`Actividad habilitada para ${studentName || "el estudiante"}.`); render(); }
function startLogin() { AuthService.initGoogleLogin({ onSuccess: async ({ idToken }) => { try { setStatus("loginStatus","info","Validando acceso…"); const access = await AuthService.validateAccess({ idToken, slug: window.APP_CONFIG.activitySlug }); if (!access.ok || !access.sessionToken) throw new Error(access.message || "No se pudo crear la sesión."); sessionToken = access.sessionToken; sessionStorage.setItem(SESSION_STORAGE_KEY, sessionToken); await loadState(); showDeliveryApp(access.estudiante?.nombre); } catch(error) { setStatus("loginStatus","error",error.message || "No fue posible habilitar la actividad."); } }, onError: ({ message }) => setStatus("loginStatus","error",message) }); }
async function restoreSession() { if (!sessionToken) return; try { await loadState(); showDeliveryApp(); } catch { sessionStorage.removeItem(SESSION_STORAGE_KEY); sessionToken = null; setStatus("loginStatus", "info", "La sesión anterior terminó. Iniciá sesión para continuar."); } }
window.addEventListener("load", () => { startLogin(); restoreSession(); });
