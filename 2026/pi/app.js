const API = "https://backend-ejercicios-pm.vercel.app/api";

const loginBtn = document.getElementById("loginBtn");
const loginBox = document.getElementById("loginBox");
const contenedor = document.getElementById("actividadesContainer");

let idToken = sessionStorage.getItem("pm_id_token");

loginBtn.addEventListener("click", async () => {
  const result = await AuthService.beginGoogleLogin();

  if (!result.ok) {
    alert("Error en login");
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
      asignatura: "pi",
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

function renderActividades(actividades) {
  contenedor.innerHTML = actividades
    .map((a) => {
      const realizada = a.intentos_realizados > 0;

      const badge = realizada
        ? `<p><strong>Estado:</strong> Realizada</p>`
        : `<p><strong>Estado:</strong> Pendiente</p>`;

      const info = realizada
        ? `<p><strong>Mejor:</strong> ${a.mejor_porcentaje}%</p>
           <p><strong>Intentos:</strong> ${a.intentos_realizados}</p>`
        : "";

      const botonTexto = realizada ? "Ver mejor intento" : "Entrar";
      const botonClase = realizada ? "btn btn-done" : "btn";
      const url = realizada ? `${a.url}?modo=revision` : a.url;

      return `
        <article class="card ${realizada ? "card-realizada" : "card-pendiente"}">
          <h3>${a.titulo}</h3>
          <p>${a.descripcion || ""}</p>
          ${badge}
          ${info}
          <a href="${url}" class="${botonClase}">${botonTexto}</a>
        </article>
      `;
    })
    .join("");
}
