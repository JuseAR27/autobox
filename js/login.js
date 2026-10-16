const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginMessage = document.querySelector("#login-message");
const forgotPasswordButton = document.querySelector(".forgot-password");

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Ver" : "Ocultar";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

forgotPasswordButton.addEventListener("click", () => {
  loginMessage.textContent = "La recuperación de contraseña estará disponible cuando se conecte el servicio de cuentas.";
  loginMessage.classList.add("is-visible");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!loginForm.reportValidity()) {
    return;
  }

  loginMessage.textContent = "Esta demostración es estática y todavía no está conectada al servicio de inicio de sesión.";
  loginMessage.classList.add("is-visible");
});
