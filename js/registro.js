const registrationForm = document.querySelector("#registration-form");
const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordToggle = document.querySelector(".password-toggle");
const formMessage = document.querySelector("#form-message");

// Evita enviar el registro si la confirmación no coincide con la contraseña.
function validatePasswordConfirmation() {
  if (passwordConfirmation.value && passwordConfirmation.value !== passwordInput.value) {
    passwordConfirmation.setCustomValidity("Las contraseñas no coinciden.");
    return;
  }

  passwordConfirmation.setCustomValidity("");
}

// Permite mostrar u ocultar la contraseña sin borrar lo escrito.
passwordToggle.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Ver" : "Ocultar";
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

passwordInput.addEventListener("input", validatePasswordConfirmation);
passwordConfirmation.addEventListener("input", validatePasswordConfirmation);

// Valida los campos localmente; el registro real requiere conectar un servicio.
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validatePasswordConfirmation();

  if (!registrationForm.reportValidity()) {
    return;
  }

  formMessage.textContent = "Esta demostración es estática y todavía no está conectada a un servicio de registro.";
  formMessage.classList.add("is-visible");
});
