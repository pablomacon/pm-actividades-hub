const AuthService = {
  initGoogleLogin({ onSuccess, onError }) {
    if (
      !window.google ||
      !window.google.accounts ||
      !window.google.accounts.id
    ) {
      onError({
        message: "Google Identity Services no cargó correctamente.",
      });
      return;
    }

    window.google.accounts.id.initialize({
      client_id: window.APP_CONFIG.googleClientId,
      callback: (response) => {
        if (!response || !response.credential) {
          onError({
            message: "No se recibió credencial de Google.",
          });
          return;
        }

        onSuccess({
          idToken: response.credential,
        });
      },
    });

    const buttonContainer = document.getElementById("googleButton");

    if (!buttonContainer) {
      onError({
        message: "No se encontró el contenedor del botón de Google.",
      });
      return;
    }

    window.google.accounts.id.renderButton(buttonContainer, {
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "pill",
      width: 260,
      locale: "es",
    });
  },

  async validateAccess({ idToken, slug }) {
    try {
      const response = await fetch(
        `${window.APP_CONFIG.apiBaseUrl}/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken,
            slug,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        return {
          ok: false,
          message: data.message || "No se pudo validar el acceso.",
        };
      }

      return data;
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: "Error al conectar con el servidor.",
      };
    }
  },
};
