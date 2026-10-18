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
                { id_categoria: 1, nombre_categoria: 'Herramientas y Mantenimiento', descripcion: 'Equipos de diagnóstico y herramientas manuales.' },
                { id_categoria: 2, nombre_categoria: 'Motor y Encendido', descripcion: 'Bujías, filtros y componentes internos del motor.' },
                { id_categoria: 3, nombre_categoria: 'Frenos y Suspensión', descripcion: 'Balatas, discos y amortiguadores.' }
            ];
            localStorage.setItem('tb_categoria', JSON.stringify(categorias));
        }

        if (!localStorage.getItem('tb_marca_producto')) {
            const marcasProducto = [
                { id_marca_producto: 1, nombre_fabricante: 'Foxwell' },
                { id_marca_producto: 2, nombre_fabricante: 'NGK' },
                { id_marca_producto: 3, nombre_fabricante: 'Akebono' },
                { id_marca_producto: 4, nombre_fabricante: 'Gates' }
            ];
            localStorage.setItem('tb_marca_producto', JSON.stringify(marcasProducto));
        }

        if (!localStorage.getItem('tb_producto')) {
            const productos = [
                { 
                    id_producto: 'FOX-OBD2', id_categoria: 1, id_marca_producto: 1, 
                    nombre_producto: 'Escáner automotriz OBD2 Bluetooth', 
                    descripcion: 'Escáner automotriz OBD2 Bluetooth de calidad profesional, diseñado para ofrecer rendimiento confiable.', 
                    precio_unitario: 1399.00, stock: 31, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Escaner+OBD2' 
                },
                { 
                    id_producto: 'NGK-BKR6', id_categoria: 2, id_marca_producto: 2, 
                    nombre_producto: 'Bujías Iridium IX - Set 4', 
                    descripcion: 'Juego de 4 bujías de Iridium de alto rendimiento para mejor combustión.', 
                    precio_unitario: 899.00, stock: 53, imagen: 'https://placehold.co/600x440/1c2026/9aa1ab?text=Bujias+Iridium'
                },
                { 
                    id_producto: 'CD-NV-2018', id_categoria: 3, id_marca_producto: 3, 
                    nombre_producto: 'Caja de dirección hidráulica', 
                    descripcion: 'Caja de dirección de repuesto OEM de alta durabilidad.', 
                    precio_unitario: 6899.00, stock: 12, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Caja+de+direccion'
                },
                { 
                    id_producto: 'WA-2.4L-2021', id_categoria: 2, id_marca_producto: 4, 
                    nombre_producto: 'Bomba de agua', 
                    descripcion: 'Bomba de agua de alto flujo para enfriamiento óptimo del motor.', 
                    precio_unitario: 3490.00, stock: 8, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Bomba+de+agua'
                },
                { 
                    id_producto: 'OP-2.0T-2023', id_categoria: 2, id_marca_producto: 1, 
                    nombre_producto: 'Bomba de aceite', 
                    descripcion: 'Bomba de aceite de precisión garantizada.', 
                    precio_unitario: 5290.00, stock: 5, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Bomba+de+aceite'
                },
                { 
                    id_producto: 'BD-3.0-2024', id_categoria: 3, id_marca_producto: 2, 
                    nombre_producto: 'Disco de freno', 
                    descripcion: 'Discos de freno ventilados de alta durabilidad y disipación de calor.', 
                    precio_unitario: 2990.00, stock: 20, imagen: 'https://placehold.co/600x430/151d2a/9aa8bc?text=Disco+de+freno'
                }
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