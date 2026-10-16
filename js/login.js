const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginMessage = document.querySelector("#login-message");

// Alterna la visibilidad de la contraseña mientras se escribe.
passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Ver" : "Ocultar";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

// Mantiene el inicio de sesión como demostración estática y valida los campos.
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!loginForm.reportValidity()) {
    return;
  }

  loginMessage.textContent = "Esta demostración es estática y todavía no está conectada al servicio de inicio de sesión.";
  loginMessage.classList.add("is-visible");
});
