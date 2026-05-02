const loginBtn = document.getElementById("loginBtn");
const overlayLoginBtn = document.getElementById("overlayLoginBtn");
const loginStatus = document.getElementById("loginStatus");
const overlayStatus = document.getElementById("overlayStatus");
const activityBadge = document.getElementById("activityBadge");

const questionsContainer = document.getElementById("questionsContainer");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");

const confirmModal = document.getElementById("confirmModal");
const confirmMessage = document.getElementById("confirmMessage");
const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");
const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");

let estudianteActual = null;
let intentoGuardado = false;

function renderQuestions() {
  questionsContainer.innerHTML = QUIZ_DATA.preguntas
    .map((pregunta) => {
      const opcionesHtml = pregunta.opciones
        .map((opcion) => {
          const inputType = pregunta.tipo === "checkbox" ? "checkbox" : "radio";

          return `
            <label class="option">
              <input type="${inputType}" name="q${pregunta.numero}" value="${opcion.valor}" />
              ${opcion.texto}
            </label>
          `;
        })
        .join("");

      return `
        <section class="question-card" id="question-${pregunta.numero}">
          <div class="question-number">${pregunta.numero}</div>
          <h3 class="question-title">${pregunta.enunciado}</h3>
          <div class="option-list">
            ${opcionesHtml}
          </div>
          <div class="question-feedback" id="feedback-${pregunta.numero}"></div>
        </section>
      `;
    })
    .join("");
}

function setStatus(element, type, message) {
  element.className = `status-box ${type}`;
  element.textContent = message;
}

function unlockActivity(message = "Acceso habilitado.") {
  document.body.classList.add("authorized");
  setStatus(loginStatus, "success", message);
  setStatus(overlayStatus, "success", message);

  if (activityBadge) {
    activityBadge.textContent = "Actividad habilitada";
    activityBadge.classList.add("badge-enabled");
  }

  loginBtn.disabled = true;
  overlayLoginBtn.disabled = true;

  loginBtn.textContent = "Ingresado";
  overlayLoginBtn.textContent = "Ingresado";
}

function showInfo(message) {
  setStatus(loginStatus, "info", message);
  setStatus(overlayStatus, "info", message);
}

function showError(message) {
  setStatus(loginStatus, "error", message);
  setStatus(overlayStatus, "error", message);
}

async function handleLogin() {
  showInfo("Iniciando sesión con Google...");

  const loginResult = await AuthService.beginGoogleLogin();

  if (!loginResult.ok) {
    showError(loginResult.message || "No se pudo iniciar la autenticación.");
    return;
  }

  const validation = await AuthService.validateAccess({
    idToken: loginResult.idToken,
    slug: window.APP_CONFIG.activitySlug,
  });

  if (validation.ok) {
    const estudiante = validation.estudiante;
    estudianteActual = estudiante;

    unlockActivity(
      `Bienvenido/a, ${estudiante.nombre} ${estudiante.apellido}. Acceso autorizado para ${estudiante.titulo}.`,
    );
  } else {
    showError(
      validation.message || "Tu cuenta no está habilitada para esta actividad.",
    );
  }
}

function obtenerRespuestas() {
  return QUIZ_DATA.preguntas.map((pregunta) => {
    if (pregunta.tipo === "radio") {
      const seleccionada = document.querySelector(
        `input[name="q${pregunta.numero}"]:checked`,
      );

      return {
        numero: pregunta.numero,
        respuesta: seleccionada ? seleccionada.value : null,
      };
    }

    if (pregunta.tipo === "checkbox") {
      const marcadas = Array.from(
        document.querySelectorAll(`input[name="q${pregunta.numero}"]:checked`),
      ).map((input) => input.value);

      return {
        numero: pregunta.numero,
        respuesta: marcadas,
      };
    }

    return {
      numero: pregunta.numero,
      respuesta: null,
    };
  });
}

function obtenerPreguntasSinResponder() {
  return QUIZ_DATA.preguntas.filter((pregunta) => {
    if (pregunta.tipo === "radio") {
      const seleccionada = document.querySelector(
        `input[name="q${pregunta.numero}"]:checked`,
      );

      return !seleccionada;
    }

    if (pregunta.tipo === "checkbox") {
      const marcadas = document.querySelectorAll(
        `input[name="q${pregunta.numero}"]:checked`,
      );

      return marcadas.length === 0;
    }

    return true;
  });
}

function mostrarResultado(resultado) {
  resultBox.style.display = "block";
  resultBox.className = `result-box ${resultado.claseResultado}`;
  resultBox.innerHTML = `
    <strong>Resultado:</strong> ${resultado.puntajeObtenido}/${resultado.puntajeTotal}<br>
    <strong>Porcentaje:</strong> ${resultado.porcentaje}%<br>
    <strong>Juicio:</strong> ${resultado.juicio}<br>
    <strong>Devolución:</strong> ${resultado.devolucion}
  `;
}

function abrirConfirmacionIncompleta(cantidad) {
  confirmMessage.textContent = `Hay ${cantidad} pregunta(s) sin responder. Si enviás ahora, se contarán como incorrectas.`;
  confirmModal.style.display = "flex";
}

function cerrarConfirmacionIncompleta() {
  confirmModal.style.display = "none";
}

async function procesarEnvioActividad() {
  if (intentoGuardado) return;

  if (!estudianteActual || !estudianteActual.id) {
    showError("No se pudo identificar al estudiante actual.");
    return;
  }

  const respuestasUsuario = obtenerRespuestas();

  submitBtn.disabled = true;
  submitBtn.textContent = "Corrigiendo...";

  let data;

  try {
    const response = await fetch(window.APP_CONFIG.apiBaseUrl + "/corregir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estudianteId: estudianteActual.id,
        slug: window.APP_CONFIG.activitySlug,
        respuestas: respuestasUsuario.reduce((acc, r) => {
          acc[r.numero] = r.respuesta;
          return acc;
        }, {}),
      }),
    });

    data = await response.json();
  } catch (error) {
    showError("Error al conectar con el servidor de corrección.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar actividad";
    return;
  }

  if (!data.ok) {
    showError(data.message || "Error al corregir la actividad.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar actividad";
    return;
  }

  const porcentaje = Math.round((data.puntaje / data.total) * 100);

  const juicio =
    porcentaje >= 76 ? "Logrado" : porcentaje >= 50 ? "En proceso" : "Inicial";

  const claseResultado =
    porcentaje >= 76 ? "success" : porcentaje >= 50 ? "warning" : "error";

  const devolucion = "Resultado calculado automáticamente.";

  mostrarResultado({
    puntajeObtenido: data.puntaje,
    puntajeTotal: data.total,
    porcentaje,
    juicio,
    devolucion,
    claseResultado,
  });

  submitBtn.textContent = "Guardando...";

  const payload = {
    estudiante_id: estudianteActual.id,
    actividad_slug: window.APP_CONFIG.activitySlug,
    puntaje_obtenido: data.puntaje,
    puntaje_total: data.total,
    porcentaje,
    juicio,
    devolucion,
    respuestas: respuestasUsuario,
  };

  const guardado = await ResultsService.guardarIntento(payload);

  if (guardado.ok) {
    intentoGuardado = true;
    resultBox.innerHTML += `<br><strong>Intento guardado:</strong> ${guardado.numero_intento}`;
    submitBtn.textContent = "Intento enviado";
  } else {
    resultBox.innerHTML += `<br><strong>Error al guardar:</strong> ${guardado.message}`;
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar actividad";
  }
}

loginBtn.addEventListener("click", handleLogin);
overlayLoginBtn.addEventListener("click", handleLogin);

submitBtn.addEventListener("click", () => {
  const sinResponder = obtenerPreguntasSinResponder();

  if (sinResponder.length > 0) {
    abrirConfirmacionIncompleta(sinResponder.length);
    return;
  }

  procesarEnvioActividad();
});

cancelSubmitBtn.addEventListener("click", cerrarConfirmacionIncompleta);

confirmSubmitBtn.addEventListener("click", () => {
  cerrarConfirmacionIncompleta();
  procesarEnvioActividad();
});

renderQuestions();
