const API = "https://backend-ejercicios-pm.vercel.app/api";

const loginBtn = document.getElementById("loginBtn");
const loginBox = document.getElementById("loginBox");
const contenedor = document.getElementById("actividadesContainer");

let idToken = sessionStorage.getItem("pm_id_token");

loginBtn.addEventListener("click", async () => {
  const result = await AuthService.beginGoogleLogin();

  if (!result.ok) {
    alert(result.message || "Error en login");
    return;
  }

  idToken = result.idToken;
  sessionStorage.setItem("pm_id_token", idToken);

  cargarActividades();
});

if (idToken) {
  cargarActividades();
}

async function cargarActividades() {
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
    alert(data.message);
    return;
  }

  loginBox.style.display = "none";
  contenedor.style.display = "grid";

  renderActividades(data.actividades);
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
