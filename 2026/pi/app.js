const API = window.APP_CONFIG.apiBaseUrl;

const loginBox = document.getElementById("loginBox");
const contenedor = document.getElementById("actividadesContainer");
const loginStatus = document.getElementById("loginStatus");
const logoutBtn = document.getElementById("logoutBtn");

let idToken = sessionStorage.getItem("pm_id_token");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSafeActivityUrl(value) {
  try {
    const rawUrl = String(value || "");
    const moduleIndex = window.location.pathname.indexOf("/2026/");
    const projectBasePath =
      moduleIndex >= 0
        ? window.location.pathname.slice(0, moduleIndex + 1)
        : "/";
    const activityUrl = rawUrl.startsWith("/2026/")
      ? `${projectBasePath}${rawUrl.slice(1)}`
      : rawUrl;
    const url = new URL(activityUrl, window.location.href);
    return url.origin === window.location.origin ? url.href : "#";
  } catch {
    return "#";
  }
}

function buildRevisionUrl(activityUrl) {
  if (activityUrl === "#") return "#";

  const url = new URL(activityUrl);
  url.searchParams.set("modo", "revision");
  return url.href;
}

function mostrarMensajeLogin(mensaje) {
  if (loginStatus) {
    loginStatus.textContent = mensaje || "";
  }
}
function cerrarSesionSegura() {
  sessionStorage.removeItem("pm_id_token");
  sessionStorage.clear();

  localStorage.removeItem("pm_id_token");
  localStorage.removeItem("estudiante");
  localStorage.removeItem("currentStudent");
  localStorage.removeItem("ayudante_estudiante");
  localStorage.removeItem("ayudante_user");

  if (window.google && google.accounts && google.accounts.id) {
    google.accounts.id.disableAutoSelect();
  }

  idToken = null;

  loginBox.style.display = "block";
  contenedor.style.display = "none";

  mostrarMensajeLogin(
    "Sesión cerrada. En una computadora compartida, revisá también que tu cuenta de Google no haya quedado abierta en el navegador.",
  );

  iniciarLoginGoogle();
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", cerrarSesionSegura);
}

function iniciarLoginGoogle() {
  AuthService.initGoogleLogin({
    onSuccess: ({ idToken: token }) => {
      idToken = token;
      sessionStorage.setItem("pm_id_token", idToken);
      mostrarMensajeLogin("Inicio de sesión correcto. Cargando actividades...");
      cargarActividades();
    },

    onError: ({ message }) => {
      mostrarMensajeLogin(message || "No se pudo iniciar sesión con Google.");
    },
  });
}

if (idToken) {
  cargarActividades();
} else {
  window.addEventListener("load", iniciarLoginGoogle);
}

async function cargarActividades() {
  try {
    const res = await fetch(`${API}/actividades/estudiante`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
        anio: 2026,
        asignatura: "pi",
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      sessionStorage.removeItem("pm_id_token");
      idToken = null;
      loginBox.style.display = "block";
      contenedor.style.display = "none";
      mostrarMensajeLogin(data.message || "No se pudo validar el acceso.");
      iniciarLoginGoogle();
      return;
    }

    loginBox.style.display = "none";
    contenedor.style.display = "grid";

    renderActividades(data.actividades);
  } catch (error) {
    console.error(error);
    sessionStorage.removeItem("pm_id_token");
    idToken = null;
    loginBox.style.display = "block";
    contenedor.style.display = "none";
    mostrarMensajeLogin("Error al conectar con el servidor.");
    iniciarLoginGoogle();
  }
}

function normalizarIntentos(valor) {
  const numero = Number(valor || 0);

  if (Number.isNaN(numero)) {
    return 0;
  }

  return numero;
}

function renderBotonesActividad(a, intentosRealizados) {
  const urlActividad = getSafeActivityUrl(a.url);
  const urlRevision = buildRevisionUrl(urlActividad);

  if (intentosRealizados === 0) {
    return `
      <a href="${urlActividad}" class="btn">Entrar</a>
    `;
  }

  if (intentosRealizados === 1) {
    return `
      <div class="button-row">
        <a href="${urlActividad}" class="btn">Realizar segundo intento</a>
        <a href="${urlRevision}" class="btn btn-done">Ver mejor intento</a>
      </div>
    `;
  }

  return `
    <a href="${urlRevision}" class="btn btn-done">Ver mejor intento</a>
  `;
}

function renderActividades(actividades) {
  contenedor.innerHTML = actividades
    .map((a) => {
      const intentosRealizados = normalizarIntentos(a.intentos_realizados);
      const realizada = intentosRealizados > 0;
      const agotada = intentosRealizados >= 2;

      const estadoTexto = !realizada
        ? "Pendiente"
        : agotada
          ? "Realizada"
          : "Realizada: queda un intento disponible";

      const badge = `<p><strong>Estado:</strong> ${estadoTexto}</p>`;

      const info = realizada
        ? `
          <p><strong>Mejor:</strong> ${a.mejor_porcentaje}%</p>
          <p><strong>Intentos:</strong> ${intentosRealizados} de 2</p>
        `
        : `<p><strong>Intentos:</strong> 0 de 2</p>`;

      const botones = renderBotonesActividad(a, intentosRealizados);

      return `
        <article class="card ${realizada ? "card-realizada" : "card-pendiente"}">
          <h3>${escapeHtml(a.titulo)}</h3>
          <p>${escapeHtml(a.descripcion)}</p>
          ${badge}
          ${info}
          ${botones}
        </article>
      `;
    })
    .join("");
}
