// Tomamos los elementos de la página que participan en el panel lateral.
const cartFrame = document.querySelector("#cart-frame");
const cartOverlay = document.querySelector(".cart-overlay");
const openCartButtons = document.querySelectorAll(".open-cart, .header-icon--cart");

// Sincronizamos el panel, el fondo, el botón y el desplazamiento de la página.
function setCartOpen(isOpen) {
  cartFrame.classList.toggle("is-open", isOpen);
  cartFrame.setAttribute("aria-hidden", String(!isOpen));
  openCartButtons.forEach((button) => {
    button.setAttribute("aria-expanded", String(isOpen));
  });
  cartOverlay.hidden = !isOpen;
  document.body.classList.toggle("cart-open", isOpen);
}

// Los botones del encabezado abren el carrito.
openCartButtons.forEach((button) => {
  button.addEventListener("click", () => setCartOpen(true));
});
cartOverlay.addEventListener("click", () => setCartOpen(false));

// Escape también cierra el carrito desde el teclado.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});

// Escuchamos el aviso de carrito.html cuando la persona pulsa el botón de cerrar.
window.addEventListener("message", (event) => {
  if (event.source === cartFrame.contentWindow && event.data === "close-cart") {
    setCartOpen(false);
  }
});
