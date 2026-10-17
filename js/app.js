
/**
 * Función para añadir un producto al carrito almacenado en LocalStorage.
 * 
 * @param {string} id_producto - El identificador único del producto.
 * @param {string} nombre_producto - El nombre comercial del producto.
 * @param {number} precio_unitario - El costo del producto.
 * @param {string} imagenUrl - La ruta de la imagen a mostrar en el carrito.
 */
function addToCart(id_producto, nombre_producto, precio_unitario, imagenUrl) {
    let carrito = JSON.parse(localStorage.getItem('autobox_carrito')) || [];

    // Buscar si el producto ya existe en el carrito mediante su id_producto
    const indexExistente = carrito.findIndex(producto => producto.id_producto === id_producto);

    if (indexExistente !== -1) {
        // Si el producto ya existe, sumamos 1 a la cantidad solicitada
        carrito[indexExistente].cantidad_solicitada += 1; 
    } else {
        // Si no existe, creamos un nuevo objeto basado en las columnas de la base de datos
        const nuevoProducto = {
            id_producto: id_producto,
            nombre_producto: nombre_producto,
            precio_unitario: precio_unitario,
            imagen: imagenUrl,
            cantidad_solicitada: 1 
        };
        carrito.push(nuevoProducto);
    }

    // Sobrescribir el LocalStorage con el arreglo actualizado
    localStorage.setItem('autobox_carrito', JSON.stringify(carrito));
    
    alert(`¡"${nombre_producto}" se ha agregado a tu carrito!`);

    // Comunicación con el Iframe: Envio de un mensaje al carrito oculto para que se redibuje
    const cartFrame = document.getElementById('cart-frame');
    if (cartFrame && cartFrame.contentWindow) {
        cartFrame.contentWindow.postMessage('update-cart', '*');
    }
}

document.addEventListener("autobox:add-to-cart", (event) => {
    const product = event.detail;
    if (
        !product ||
        typeof product.id !== "string" ||
        typeof product.name !== "string" ||
        typeof product.price !== "number" ||
        typeof product.image !== "string"
    ) {
        console.error("Datos de producto no válidos para agregar al carrito.", product);
        return;
    }

    addToCart(product.id, product.name, product.price, product.image);
});
