const API = "https://backend-ejercicios-pm.vercel.app/api";

const loginBox = document.getElementById("loginBox");
const contenedor = document.getElementById("actividadesContainer");
const loginStatus = document.getElementById("loginStatus");

let idToken = sessionStorage.getItem("pm_id_token");

function mostrarMensajeLogin(mensaje) {
  if (loginStatus) {
    loginStatus.textContent = mensaje || "";
  }
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
        asignatura: "pii",
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
  const urlActividad = a.url;
  const urlRevision = `${a.url}?modo=revision`;

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
          <h3>${a.titulo}</h3>
          <p>${a.descripcion || ""}</p>
          ${badge}
          ${info}
          ${botones}
        </article>
      `;
    })
    .join("");
}
