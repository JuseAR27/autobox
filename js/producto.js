/**
 * Lógica para cargar la información del producto y sus recomendaciones.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID de la URL
    const urlParams = new URLSearchParams(window.location.search);
    let productoId = urlParams.get('id');

    if (!productoId) {
        productoId = 'FOX-OBD2'; 
    }

    // Extraer datos de la base de datos simulada en LocalStorage
    const productosBD = JSON.parse(localStorage.getItem('tb_producto')) || [];
    const marcasProdBD = JSON.parse(localStorage.getItem('tb_marca_producto')) || [];
    const compatibilidadBD = JSON.parse(localStorage.getItem('tb_compatibilidad_vehiculo')) || [];
    const vehiculosBD = JSON.parse(localStorage.getItem('tb_vehiculo')) || [];
    const modelosBD = JSON.parse(localStorage.getItem('tb_modelo_auto')) || [];
    const marcasAutoBD = JSON.parse(localStorage.getItem('tb_marca_auto')) || [];
    const productoActual = productosBD.find(p => p.id_producto === productoId);

    // ACTUALIZAR LOS DETALLES DEL PRODUCTO
    if (productoActual) {
        document.getElementById('prod-title').textContent = productoActual.nombre_producto;
        document.getElementById('prod-price').textContent = `$${productoActual.precio_unitario.toFixed(2)}`;
        document.getElementById('prod-desc').textContent = productoActual.descripcion;
        document.getElementById('prod-stock').textContent = productoActual.stock;
        
        // Imagen principal
        const mainImage = document.getElementById('main-image');
        if (mainImage) mainImage.src = productoActual.imagen;

        // Tabla de especificaciones técnicas
        document.getElementById('spec-sku').textContent = productoActual.id_producto;
        
        // Cruzar tabla para obtener el nombre de la marca
        const marcaInfo = marcasProdBD.find(m => m.id_marca_producto === productoActual.id_marca_producto);
        if (marcaInfo) {
            document.getElementById('spec-marca').textContent = marcaInfo.nombre_fabricante;
        }

        const addBtn = document.getElementById('prod-add-btn');
        if (addBtn) {
            addBtn.onclick = () => {
                addToCart(productoActual.id_producto, productoActual.nombre_producto, productoActual.precio_unitario, productoActual.imagen);
            };
        }

        // ACTUALIZAR COMPATIBILIDAD DE VEHÍCULOS
        const listaCompatibilidad = document.getElementById('spec-compatibilidad-list');
        if (listaCompatibilidad) {
            listaCompatibilidad.innerHTML = ''; // Limpiar mensaje de carga
            const compatibilidadesProducto = compatibilidadBD.filter(c => c.id_producto === productoId);
            
            if (compatibilidadesProducto.length > 0) {
                compatibilidadesProducto.forEach(comp => {
                    const vehiculo = vehiculosBD.find(v => v.id_vehiculo === comp.id_vehiculo);
                    if (vehiculo) {
                        const modelo = modelosBD.find(m => m.id_modelo_auto === vehiculo.id_modelo_auto);
                        const marca = marcasAutoBD.find(ma => ma.id_marca_auto === modelo.id_marca_auto);
                        
                        const li = document.createElement('li');
                        li.innerHTML = `<span>${marca.nombre_marca} ${modelo.nombre_modelo}</span> <span>${vehiculo.anio_fabricacion} ✔️</span>`;
                        listaCompatibilidad.appendChild(li);
                    }
                });
            } else {
                listaCompatibilidad.innerHTML = '<li><span>Universal / Aplicación general</span> <span>✔️</span></li>';
            }
        }

    } else {
        document.getElementById('prod-title').textContent = "Producto no encontrado.";
    }

    // GENERAR TARJETAS "COMPLEMENTA TU COMPRA"
    const gridRecomendaciones = document.getElementById('recommendations-grid');
    
    if (gridRecomendaciones) {
        const recomendaciones = productosBD.filter(p => p.id_producto !== productoId).slice(0, 4);

        recomendaciones.forEach(prod => {
            const cardHTML = `
                <div class="product-card" style="cursor: pointer;" onclick="window.location.href='producto.html?id=${prod.id_producto}'">
                    <div class="card-image">
                        <img src="${prod.imagen}" alt="${prod.nombre_producto}">
                        <button class="heart-btn" onclick="event.stopPropagation()">🤍</button>
                    </div>
                    <div class="card-info">
                        <span class="card-sku">SKU - ${prod.id_producto}</span>
                        <h3 style="font-size: 16px; margin: 5px 0;">${prod.nombre_producto}</h3>
                        <p class="rating" style="font-size: 12px; color: var(--color-muted);">⭐ 4.8</p>
                        <div class="card-bottom" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                            <span class="card-price" style="font-size: 20px; font-weight: bold; display: flex; flex-direction: column;">
                                $${prod.precio_unitario.toFixed(2)} 
                                <small style="font-size: 10px; color: var(--color-muted); font-weight: normal;">IVA incluido</small>
                            </span>
                            <button class="add-btn" style="background-color: var(--color-orange); color: white; border: none; border-radius: 6px; width: 35px; height: 35px; font-size: 20px; cursor: pointer;" 
                            onclick="event.stopPropagation(); addToCart('${prod.id_producto}', '${prod.nombre_producto}', ${prod.precio_unitario}, '${prod.imagen}')">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            `;
            gridRecomendaciones.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});

/**
 * Función para cambiar la imagen principal al hacer clic en una miniatura.
 * @param {string} src - La URL de origen de la imagen miniatura que fue seleccionada.
 */
function changeMainImage(src) {
    const mainImage = document.getElementById('main-image');
    if(mainImage) mainImage.src = src;

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if(thumb.src === src) {
            thumb.classList.add('active');
        }
    });
}
