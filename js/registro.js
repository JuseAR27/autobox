const registrationForm = document.querySelector("#registration-form");
const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordToggle = document.querySelector(".password-toggle");
const formMessage = document.querySelector("#form-message");

function validatePasswordConfirmation() {
  if (passwordConfirmation.value && passwordConfirmation.value !== passwordInput.value) {
    passwordConfirmation.setCustomValidity("Las contraseñas no coinciden.");
    return;
  }

  passwordConfirmation.setCustomValidity("");
}

passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Ver" : "Ocultar";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

passwordInput.addEventListener("input", validatePasswordConfirmation);
passwordConfirmation.addEventListener("input", validatePasswordConfirmation);

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validatePasswordConfirmation();

  if (!registrationForm.reportValidity()) {
    return;
  }

  formMessage.textContent = "Esta demostración es estática y todavía no está conectada a un servicio de registro.";
  formMessage.classList.add("is-visible");
});
