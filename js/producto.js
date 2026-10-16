
/**
 * Función para cambiar la imagen principal al hacer clic en una miniatura
 * @param {string} src - La URL de origen de la imagen miniatura seleccionada.
 */
function changeMainImage(src) {
    // Obtenemos el elemento de la imagen principal
    const mainImage = document.getElementById('main-image');
    mainImage.src = src;

    // Quitamos la clase 'active' de todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        // Si la imagen seleccionada coincide con el origen, le damos la clase activa para el borde naranja
        if(thumb.src === src) {
            thumb.classList.add('active');
        }
    });
}

/**
 * Función para añadir un producto al carrito almacenado en LocalStorage
 * @param {string} id - identificador del producto
 * @param {string} nombre - Nombre comercial del producto
 * @param {number} precio - Precio del producto
 * @param {string} imagenUrl - URL de la imagen
 */
function addToCart(id, nombre, precio, imagenUrl) {
    // Obtenet el carrito actual de LocalStorage, o creamos un arreglo vacío si no existe
    let carrito = JSON.parse(localStorage.getItem('autobox_carrito')) || [];

    // Buscar si el producto ya está en el carrito para sumar la cantidad
    const indexExistente = carrito.findIndex(producto => producto.id === id);

    if (indexExistente !== -1) {
        // Si ya existe, aumentamos su cantidad
        carrito[indexExistente].cantidad += 1;
    } else {
        // Si no existe, creamos un nuevo objeto estructurado
        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagenUrl,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
    }

    localStorage.setItem('autobox_carrito', JSON.stringify(carrito));

    alert(`¡"${nombre}" se ha agregado a tu carrito de compras de forma exitosa!`);
    console.log("Carrito actual en LocalStorage: ", carrito);
}
