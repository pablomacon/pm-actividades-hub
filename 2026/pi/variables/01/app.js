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

function normalizarTexto(texto) {
  return texto
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*;\s*/g, ";")
    .toLowerCase();
}

function renderQuestions() {
  questionsContainer.innerHTML = QUIZ_DATA.preguntas
    .map((pregunta) => {
      let contenidoOpciones = "";

      if (pregunta.tipo === "checkbox" || pregunta.tipo === "radio") {
        const opcionesHtml = pregunta.opciones
          .map((opcion) => {
            const inputType =
              pregunta.tipo === "checkbox" ? "checkbox" : "radio";
            return `
              <label class="option">
                <input type="${inputType}" name="q${pregunta.numero}" value="${opcion.valor}" />
                ${opcion.texto}
              </label>
            `;
          })
          .join("");

        contenidoOpciones = `<div class="option-list">${opcionesHtml}</div>`;
      }

      if (pregunta.tipo === "text") {
        contenidoOpciones = `
          <div class="option-list">
            <input
              type="text"
              class="text-answer"
              id="q${pregunta.numero}"
              name="q${pregunta.numero}"
              placeholder="${pregunta.placeholder || "Escribí tu respuesta acá"}"
            />
          </div>
        `;
      }

      return `
        <section class="question-card" id="question-${pregunta.numero}">
          <div class="question-number">${pregunta.numero}</div>
          <h3 class="question-title">${pregunta.enunciado.replace(/\n/g, "<br>")}</h3>
          ${contenidoOpciones}
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

    if (pregunta.tipo === "text") {
      const input = document.getElementById(`q${pregunta.numero}`);
      return {
        numero: pregunta.numero,
        respuesta: input ? input.value : "",
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

    if (pregunta.tipo === "text") {
      const input = document.getElementById(`q${pregunta.numero}`);
      return !input || input.value.trim() === "";
    }

    return true;
  });
}

function corregirActividad() {
  const respuestasUsuario = obtenerRespuestas();
  let puntajeObtenido = 0;

  const respuestasCorregidas = QUIZ_DATA.preguntas.map((pregunta) => {
    const respuestaUsuario = respuestasUsuario.find(
      (r) => r.numero === pregunta.numero,
    );

    let esCorrecta = false;
    let respuestaDada = respuestaUsuario?.respuesta ?? null;
    let respuestaCorrecta = "";

    if (pregunta.tipo === "radio") {
      const correcta = pregunta.opciones.find((op) => op.correcta);
      esCorrecta = respuestaDada === correcta.valor;
      respuestaCorrecta = correcta.valor;
    }

    if (pregunta.tipo === "checkbox") {
      const correctas = pregunta.opciones
        .filter((op) => op.correcta)
        .map((op) => op.valor)
        .sort();

      const dadas = Array.isArray(respuestaDada)
        ? [...respuestaDada].sort()
        : [];
      esCorrecta = JSON.stringify(correctas) === JSON.stringify(dadas);
      respuestaDada = dadas.join("|");
      respuestaCorrecta = correctas.join("|");
    }

    if (pregunta.tipo === "text") {
      const esperada = normalizarTexto(pregunta.respuestaEsperada);
      const dada = normalizarTexto(respuestaDada || "");
      esCorrecta = dada === esperada;
      respuestaCorrecta = pregunta.respuestaEsperada;
    }

    if (esCorrecta) {
      puntajeObtenido += pregunta.puntaje;
    }

    return {
      numero_pregunta: pregunta.numero,
      tipo_pregunta: pregunta.tipo,
      enunciado_pregunta: pregunta.enunciado,
      respuesta_dada: Array.isArray(respuestaUsuario?.respuesta)
        ? respuestaUsuario.respuesta.join("|")
        : (respuestaUsuario?.respuesta ?? ""),
      respuesta_correcta: respuestaCorrecta,
      es_correcta: esCorrecta,
    };
  });

  const puntajeTotal = QUIZ_DATA.puntajeTotal;
  const porcentaje = Math.round((puntajeObtenido / puntajeTotal) * 100);

  let juicio = "";
  let devolucion = "";
  let claseResultado = "";

  if (porcentaje < 50) {
    juicio = "Inicial";
    devolucion =
      "Todavía hay dificultades para reconocer tipos de datos, declaración, asignación y actualización de variables. Conviene revisar el material y volver a intentarlo.";
    claseResultado = "error";
  } else if (porcentaje < 76) {
    juicio = "En proceso";
    devolucion =
      "Reconocés varios conceptos correctamente, pero todavía hay confusiones entre tipo, valor, compatibilidad y cambios de una variable.";
    claseResultado = "warning";
  } else {
    juicio = "Logrado";
    devolucion =
      "Buen trabajo. Lograste identificar y usar correctamente variables, tipos de datos y lectura simple de código en Java.";
    claseResultado = "success";
  }

  return {
    puntajeObtenido,
    puntajeTotal,
    porcentaje,
    juicio,
    devolucion,
    claseResultado,
    respuestasCorregidas,
  };
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

function mostrarErroresPorPregunta(resultado) {
  QUIZ_DATA.preguntas.forEach((pregunta) => {
    const questionCard = document.getElementById(`question-${pregunta.numero}`);
    const feedback = document.getElementById(`feedback-${pregunta.numero}`);

    if (!questionCard || !feedback) return;

    questionCard.classList.remove(
      "question-correct",
      "question-incorrect",
      "question-incomplete",
    );
    feedback.textContent = "";

    const respuesta = resultado.respuestasCorregidas.find(
      (r) => r.numero_pregunta === pregunta.numero,
    );

    const sinResponder =
      !respuesta ||
      respuesta.respuesta_dada === null ||
      respuesta.respuesta_dada === undefined ||
      respuesta.respuesta_dada === "";

    if (sinResponder) {
      questionCard.classList.add("question-incomplete");
      feedback.textContent = "Sin responder. Se contó como incorrecta.";
      return;
    }

    if (respuesta.es_correcta) {
      questionCard.classList.add("question-correct");
      feedback.textContent = "Correcta.";
    } else {
      questionCard.classList.add("question-incorrect");
      feedback.textContent = "Incorrecta.";
    }
  });
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

  const resultado = corregirActividad();
  mostrarResultado(resultado);
  mostrarErroresPorPregunta(resultado);

  if (!estudianteActual || !estudianteActual.id) {
    showError("No se pudo identificar al estudiante actual.");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Guardando...";

  const payload = {
    estudiante_id: estudianteActual.id,
    actividad_slug: window.APP_CONFIG.activitySlug,
    puntaje_obtenido: resultado.puntajeObtenido,
    puntaje_total: resultado.puntajeTotal,
    porcentaje: resultado.porcentaje,
    juicio: resultado.juicio,
    devolucion: resultado.devolucion,
    respuestas: resultado.respuestasCorregidas,
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
