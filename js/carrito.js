// ==============================================================
// 1. LÓGICA DEL CONTENEDOR PADRE (producto.html / index.html)
// ==============================================================
const cartFrame = document.querySelector("#cart-frame");
const cartOverlay = document.querySelector(".cart-overlay");
const openCartButtons = document.querySelectorAll(".open-cart, .header-icon--cart");

// Función para abrir/cerrar el carrito en la página principal
function setCartOpen(isOpen) {
    if (!cartFrame) return; // Evita errores si se ejecuta dentro del iframe

    cartFrame.classList.toggle("is-open", isOpen);
    cartFrame.setAttribute("aria-hidden", String(!isOpen));
    openCartButtons.forEach((button) => {
        button.setAttribute("aria-expanded", String(isOpen));
    });
    
    if (cartOverlay) cartOverlay.hidden = !isOpen;
    document.body.classList.toggle("cart-open", isOpen);
}

// Escuchadores de eventos para la página principal
if (openCartButtons.length > 0) {
    openCartButtons.forEach((button) => {
        button.addEventListener("click", () => setCartOpen(true));
    });
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", () => setCartOpen(false));
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setCartOpen(false);
});

// Escuchar mensajes provenientes del iframe (como cerrar el carrito)
window.addEventListener("message", (event) => {
    if (cartFrame && event.source === cartFrame.contentWindow && event.data === "close-cart") {
        setCartOpen(false);
    }
});


// LÓGICA DEL IFRAME

// Función para dibujar los productos almacenados
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('empty-state');
    const countSpan = document.querySelector('.cart-panel__count');
    if (!cartItemsContainer) return; 

    let carrito = JSON.parse(localStorage.getItem('autobox_carrito')) || [];
    
    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyState.style.display = 'block';
        if(countSpan) countSpan.textContent = '0 productos';
        return;
    }

    emptyState.style.display = 'none';
    let html = '';
    let totalProductos = 0;
    let totalPrecio = 0;

    carrito.forEach((item, index) => {
        totalProductos += item.cantidad_solicitada;
        totalPrecio += (item.precio_unitario * item.cantidad_solicitada);
        
        html += `
            <div class="cart-item" style="display: flex; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid #34363a; padding-bottom: 15px;">
                <img src="${item.imagen || 'https://via.placeholder.com/60'}" alt="${item.nombre_producto}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 5px 0; font-size: 14px; color: #f4f5f6;">${item.nombre_producto}</h4>
                    <span style="color: #888; font-size: 12px;">SKU: ${item.id_producto}</span>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px; align-items: center;">
                        <span style="color: #ff501f; font-weight: bold;">$${item.precio_unitario.toFixed(2)}</span>
                        <span style="color: #bdc1c6; font-size: 13px;">Cant: ${item.cantidad_solicitada}</span>
                    </div>
                </div>
                <button onclick="removeCartItem(${index})" style="background: none; border: none; color: #888; cursor: pointer; height: fit-content; font-size: 16px;">✖</button>
            </div>
        `;
    });

    html += `
        <div style="margin-top: 20px; display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: #fff;">
            <span>Total:</span>
            <span>$${totalPrecio.toFixed(2)}</span>
        </div>
        <button class="catalog-link" style="width: 100%; margin-top: 20px; padding: 15px; border-radius: 8px;">Proceder al pago</button>
    `;

    cartItemsContainer.innerHTML = html;
    if(countSpan) countSpan.textContent = `${totalProductos} productos`;
}

// Función global para eliminar items
window.removeCartItem = function(index) {
    let carrito = JSON.parse(localStorage.getItem('autobox_carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('autobox_carrito', JSON.stringify(carrito));
    renderCartItems(); 
};

// Escuchar actualización de productos desde la vista principal
window.addEventListener("message", (event) => {
    if (event.data === "update-cart") {
        renderCartItems();
    }
});

// Configurar el botón de cerrar propio del iframe
const btnCloseIframe = document.querySelector(".close-cart");
if (btnCloseIframe) {
    btnCloseIframe.addEventListener("click", () => {
        if (window.parent !== window) {
            window.parent.postMessage("close-cart", "*");
        } else {
            window.location.href = "index.html";
        }
    });
}

// Renderizar al cargar el iframe
document.addEventListener('DOMContentLoaded', renderCartItems);
