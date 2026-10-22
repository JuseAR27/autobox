/**
 * Clase para inicializar la base de datos simulada en LocalStorage.
 */
class DatabaseSeeder {
    constructor() {
        this.init();
    }

    init() {
        // TABLAS DE VEHÍCULOS
        if (!localStorage.getItem('tb_marca_auto')) {
            const marcasAuto = [
                { id_marca_auto: 1, nombre_marca: 'Nissan', estatus: 1 },
                { id_marca_auto: 2, nombre_marca: 'Volkswagen', estatus: 1 },
                { id_marca_auto: 3, nombre_marca: 'Chevrolet', estatus: 1 }
            ];
            localStorage.setItem('tb_marca_auto', JSON.stringify(marcasAuto));
        }

        if (!localStorage.getItem('tb_modelo_auto')) {
            const modelosAuto = [
                { id_modelo_auto: 1, id_marca_auto: 1, nombre_modelo: 'Versa' },
                { id_modelo_auto: 2, id_marca_auto: 2, nombre_modelo: 'Jetta' },
                { id_modelo_auto: 3, id_marca_auto: 3, nombre_modelo: 'Chevy' }
            ];
            localStorage.setItem('tb_modelo_auto', JSON.stringify(modelosAuto));
        }

        if (!localStorage.getItem('tb_vehiculo')) {
            const vehiculos = [
                { id_vehiculo: 1, id_modelo_auto: 1, motor: '1.6L 4 Cilindros', anio_fabricacion: 2020 },
                { id_vehiculo: 2, id_modelo_auto: 2, motor: '2.0L 4 Cilindros', anio_fabricacion: 2018 },
                { id_vehiculo: 3, id_modelo_auto: 3, motor: '1.4L 4 Cilindros', anio_fabricacion: 2010 }
            ];
            localStorage.setItem('tb_vehiculo', JSON.stringify(vehiculos));
        }

        // TABLAS DE PRODUCTOS Y CATEGORÍAS
        if (!localStorage.getItem('tb_categoria')) {
            const categorias = [
                { id_categoria: 1, nombre_categoria: 'Herramientas y Mantenimiento', descripcion: 'Equipos de diagnóstico.' },
                { id_categoria: 2, nombre_categoria: 'Motor y Encendido', descripcion: 'Bujías, filtros y motor.' },
                { id_categoria: 3, nombre_categoria: 'Frenos y Suspensión', descripcion: 'Balatas y discos.' },
                { id_categoria: 4, nombre_categoria: 'Accesorios y Confort', descripcion: 'Interiores y exteriores.' }
            ];
            localStorage.setItem('tb_categoria', JSON.stringify(categorias));
        }

        if (!localStorage.getItem('tb_marca_producto')) {
            const marcasProducto = [
                { id_marca_producto: 1, nombre_fabricante: 'Foxwell' },
                { id_marca_producto: 2, nombre_fabricante: 'Akebono' },
                { id_marca_producto: 3, nombre_fabricante: 'Gates' },
                { id_marca_producto: 4, nombre_fabricante: 'Rain-X' },
                { id_marca_producto: 5, nombre_fabricante: 'Prestone' },
                { id_marca_producto: 6, nombre_fabricante: 'Stanley' },
                { id_marca_producto: 7, nombre_fabricante: 'Bosch' },
                { id_marca_producto: 8, nombre_fabricante: 'NGK' },
                { id_marca_producto: 9, nombre_fabricante: 'KYB' },
                { id_marca_producto: 10, nombre_fabricante: 'Brembo' },
                { id_marca_producto: 11, nombre_fabricante: 'LTH' },
                { id_marca_producto: 12, nombre_fabricante: 'Mobil' },
                { id_marca_producto: 13, nombre_fabricante: 'Bell' },
                { id_marca_producto: 14, nombre_fabricante: 'Husky' },
                { id_marca_producto: 15, nombre_fabricante: 'Anker' },
                { id_marca_producto: 16, nombre_fabricante: 'Truper' },
                { id_marca_producto: 17, nombre_fabricante: 'Urrea' },
                { id_marca_producto: 18, nombre_fabricante: 'Mann' },
                { id_marca_producto: 19, nombre_fabricante: 'TRW' }
            ];
            localStorage.setItem('tb_marca_producto', JSON.stringify(marcasProducto));
        }

        if (!localStorage.getItem('tb_producto')) {
            const productos = [
                { id_producto: 'FOX-OBD2', id_categoria: 1, id_marca_producto: 1, nombre_producto: 'Escáner automotriz OBD2 Bluetooth', descripcion: 'Escáner automotriz OBD2 de calidad profesional.', precio_unitario: 1399.00, stock: 31, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Escaner+OBD2' },
                { id_producto: 'AKB-ACT', id_categoria: 3, id_marca_producto: 2, nombre_producto: 'Balatas semimetálicas ProACT', descripcion: 'Balatas de freno delanteras de alta fricción.', precio_unitario: 979.00, stock: 15, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Balatas+ProACT' },
                { id_producto: 'GTS-RD88', id_categoria: 2, id_marca_producto: 3, nombre_producto: 'Kit mangueras de radiador', descripcion: 'Kit completo de mangueras de silicón.', precio_unitario: 849.00, stock: 8, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Kit+Mangueras' },
                { id_producto: 'RX-4L', id_categoria: 1, id_marca_producto: 4, nombre_producto: 'Líquido limpiaparabrisas 4 L', descripcion: 'Líquido limpiaparabrisas con repelente de lluvia.', precio_unitario: 219.00, stock: 40, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Limpiaparabrisas' },
                { id_producto: 'PKS-AF1', id_categoria: 1, id_marca_producto: 5, nombre_producto: 'Anticongelante largo plazo 3.78 L', descripcion: 'Anticongelante listo para usar, protección 5 años.', precio_unitario: 329.00, stock: 25, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Anticongelante' },
                { id_producto: 'STN-108', id_categoria: 1, id_marca_producto: 6, nombre_producto: 'Juego de herramientas 108 piezas', descripcion: 'Set completo de dados y llaves mecánicas.', precio_unitario: 2490.00, stock: 10, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Herramientas' },
                { id_producto: 'BSH-FA21', id_categoria: 2, id_marca_producto: 7, nombre_producto: 'Filtro de aceite de alto flujo', descripcion: 'Filtro de aceite sintético de máxima retención.', precio_unitario: 189.00, stock: 65, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Filtro+Aceite' },
                { id_producto: 'NGK-IR4', id_categoria: 2, id_marca_producto: 8, nombre_producto: 'Bujías de iridio (juego de 4)', descripcion: 'Juego de 4 bujías de alto rendimiento.', precio_unitario: 559.00, stock: 53, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Bujias+Iridio' },
                { id_producto: 'KYB-GD1', id_categoria: 3, id_marca_producto: 9, nombre_producto: 'Amortiguador delantero de gas', descripcion: 'Amortiguador de gas para máxima estabilidad.', precio_unitario: 1450.00, stock: 18, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Amortiguador' },
                { id_producto: 'BRM-DV2', id_categoria: 3, id_marca_producto: 10, nombre_producto: 'Discos de freno ventilados (par)', descripcion: 'Discos de freno de máxima respuesta térmica.', precio_unitario: 2790.00, stock: 10, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Discos+Brembo' },
                { id_producto: 'LTH-45', id_categoria: 2, id_marca_producto: 11, nombre_producto: 'Batería 12V 45Ah libre de mantenimiento', descripcion: 'Batería automotriz de larga duración.', precio_unitario: 1850.00, stock: 24, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Bateria+LTH' },
                { id_producto: 'MBL-5W30', id_categoria: 2, id_marca_producto: 12, nombre_producto: 'Aceite sintético 5W-30 (4 L)', descripcion: 'Aceite de motor formulado para protección extrema.', precio_unitario: 899.00, stock: 45, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Aceite+Mobil' },
                { id_producto: 'GTS-BD21', id_categoria: 2, id_marca_producto: 3, nombre_producto: 'Banda de distribución con tensor', descripcion: 'Kit completo de banda de tiempo.', precio_unitario: 1180.00, stock: 14, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Banda+Distribucion' },
                { id_producto: 'BSH-AIR7', id_categoria: 2, id_marca_producto: 7, nombre_producto: 'Filtro de aire de motor', descripcion: 'Filtro de aire de alto flujo.', precio_unitario: 219.00, stock: 60, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Filtro+Aire' },
                { id_producto: 'BRM-BT3', id_categoria: 3, id_marca_producto: 10, nombre_producto: 'Balatas traseras cerámicas', descripcion: 'Balatas de freno cerámicas de baja emisión de polvo.', precio_unitario: 720.00, stock: 22, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Balatas+Brembo' },
                { id_producto: 'KYB-GT1', id_categoria: 3, id_marca_producto: 9, nombre_producto: 'Amortiguador trasero de gas', descripcion: 'Amortiguador trasero de alta respuesta.', precio_unitario: 1190.00, stock: 15, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Amortiguador+Trasero' },
                { id_producto: 'BLL-VOL', id_categoria: 4, id_marca_producto: 13, nombre_producto: 'Cubierta de volante piel sintética', descripcion: 'Cubierta antideslizante para volante.', precio_unitario: 349.00, stock: 30, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Cubierta+Volante' },
                { id_producto: 'HSK-TP4', id_categoria: 4, id_marca_producto: 14, nombre_producto: 'Tapetes universales de hule (4 pzas)', descripcion: 'Juego de 4 tapetes de uso rudo.', precio_unitario: 529.00, stock: 40, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Tapetes' },
                { id_producto: 'ANK-C60', id_categoria: 4, id_marca_producto: 15, nombre_producto: 'Cargador USB-C doble de 60 W', descripcion: 'Cargador rápido para auto USB-C.', precio_unitario: 329.00, stock: 50, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Cargador+Auto' },
                { id_producto: 'TRP-GH2', id_categoria: 1, id_marca_producto: 16, nombre_producto: 'Gato hidráulico de botella 2 ton', descripcion: 'Gato hidráulico compacto y resistente.', precio_unitario: 899.00, stock: 12, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Gato+Hidraulico' },
                { id_producto: 'URR-TQ12', id_categoria: 1, id_marca_producto: 17, nombre_producto: 'Torquímetro de 1/2 pulgada', descripcion: 'Llave dinamométrica de precisión profesional.', precio_unitario: 1290.00, stock: 8, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Torquimetro' },
                { id_producto: 'OP-2.0T-2023', id_categoria: 2, id_marca_producto: 18, nombre_producto: 'Bomba de aceite', descripcion: 'Bomba de aceite de precisión garantizada.', precio_unitario: 5290.00, stock: 5, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Bomba+de+aceite' },
                { id_producto: 'WA-2.4L-2021', id_categoria: 2, id_marca_producto: 3, nombre_producto: 'Bomba de agua', descripcion: 'Bomba de agua de alto flujo.', precio_unitario: 3490.00, stock: 8, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Bomba+de+agua' },
                { id_producto: 'BD-3.0-2024', id_categoria: 3, id_marca_producto: 7, nombre_producto: 'Disco de freno', descripcion: 'Discos de freno ventilados de alta durabilidad.', precio_unitario: 2990.00, stock: 20, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Disco+de+freno' },
                { id_producto: 'CD-NV-2018', id_categoria: 3, id_marca_producto: 19, nombre_producto: 'Caja de dirección hidráulica', descripcion: 'Caja de dirección de repuesto OEM.', precio_unitario: 6899.00, stock: 12, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Caja+de+direccion' }
            ];
            localStorage.setItem('tb_producto', JSON.stringify(productos));
        }

        // TABLA DE COMPATIBILIDAD

        if (!localStorage.getItem('tb_compatibilidad_vehiculo')) {
            const compatibilidad = [
                { id_producto: 'FOX-OBD2', id_vehiculo: 1, comentario: 'Compatible con el puerto de diagnóstico debajo del volante.' },
                { id_producto: 'FOX-OBD2', id_vehiculo: 2, comentario: 'Lectura completa de sensores.' },
                { id_producto: 'NGK-BKR6', id_vehiculo: 1, comentario: 'Requiere calibración a 0.044 pulgadas.' }
            ];
            localStorage.setItem('tb_compatibilidad_vehiculo', JSON.stringify(compatibilidad));
        }

        // TABLAS DE USUARIOS Y ROLES

        if (!localStorage.getItem('tb_usuario')) {
            const usuarios = [
                { id_usuario: 1, nombre_completo: 'Jose Francisco Aquino', correo: 'jose@autobox.com', contrasena: '12345678' },
                { id_usuario: 2, nombre_completo: 'Administrador AutoBox', correo: 'admin@autobox.com', contrasena: 'admin123' }
            ];
            localStorage.setItem('tb_usuario', JSON.stringify(usuarios));
        }

        if (!localStorage.getItem('tb_cliente')) {
            const clientes = [
                { id_usuario: 1, telefono: '5551234567' }
            ];
            localStorage.setItem('tb_cliente', JSON.stringify(clientes));
        }

        if (!localStorage.getItem('tb_administrador')) {
            const administradores = [
                { id_usuario: 2, rol_permiso: 'SUPER_ADMIN' }
            ];
            localStorage.setItem('tb_administrador', JSON.stringify(administradores));
        }

        if (!localStorage.getItem('tb_direccion')) {
            const direcciones = [
                { id_direccion: 1, id_usuario: 1, codigo_postal: '83000', ciudad: 'Hermosillo', calle: 'Blvd. Solidaridad 123' }
            ];
            localStorage.setItem('tb_direccion', JSON.stringify(direcciones));
        }

        // TABLAS DE CONFIGURACIÓN DE COMPRA

        if (!localStorage.getItem('tb_metodo_pago')) {
            const metodosPago = [
                { id_metodo_pago: 1, nombre: 'Tarjeta de Crédito / Débito', activo: 1 },
                { id_metodo_pago: 2, nombre: 'PayPal', activo: 1 },
                { id_metodo_pago: 3, nombre: 'Pago en OXXO', activo: 1 }
            ];
            localStorage.setItem('tb_metodo_pago', JSON.stringify(metodosPago));
        }

        if (!localStorage.getItem('tb_metodo_envio')) {
            const metodosEnvio = [
                { id_metodo_envio: 1, nombre: 'Envío Estándar (3-5 días)', costo_adicional: 150.00, activo: 1 },
                { id_metodo_envio: 2, nombre: 'Envío Exprés (1-2 días)', costo_adicional: 250.00, activo: 1 }
            ];
            localStorage.setItem('tb_metodo_envio', JSON.stringify(metodosEnvio));
        }

        // TABLAS TRANSACCIONALES (INICIALIZADAS VACÍAS)

        // Estas tablas almacenarán la interacción real del usuario
        if (!localStorage.getItem('tb_pedido')) localStorage.setItem('tb_pedido', JSON.stringify([]));
        if (!localStorage.getItem('tb_detalle_pedido')) localStorage.setItem('tb_detalle_pedido', JSON.stringify([]));
        if (!localStorage.getItem('tb_carrito')) localStorage.setItem('tb_carrito', JSON.stringify([]));
        if (!localStorage.getItem('tb_detalle_carrito')) localStorage.setItem('tb_detalle_carrito', JSON.stringify([]));

        console.log("Base de datos simulada inicializada con todas las tablas del diagrama ER.");
    }
}

// Ejecutar el seeder automáticamente al cargar cualquier archivo HTML que incluya este script
const dbSeeder = new DatabaseSeeder();