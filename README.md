# AutoBox

**Nombre del equipo:** Equipo 2  
**Nombre de la tienda:** AutoBox

### Integrantes:
* Jose Francisco Aquino Rivera
* Alexia María Félix Hernández
* Jose Guillermo Valencia Barrera
* Victor Yael Balandrán Pedroza

### Tecnologías utilizadas:
* **HTML5:** Estructuración semántica de las vistas.
* **CSS3:** Estilos personalizados, diseño responsivo usando Flexbox y CSS Grid.
* **JavaScript:** Lógica de programación del lado del cliente y manipulación del DOM.
* **LocalStorage:** Persistencia de datos simulando un motor de base de datos relacional.

### Cómo ejecutar el proyecto:
1. Clona o descarga el repositorio en tu computadora local.
2. Abre la carpeta del proyecto en tu editor de código preferido (ej. Visual Studio Code).
3. Para la mejor experiencia, utiliza la extensión **Live Server**. Haz clic derecho sobre el archivo `index.html` y selecciona "Open with Live Server".

### Funcionalidades implementadas:
* **Base de datos simulada en el cliente:** Creación de un script semilla (`db.js`) que inicializa 17 tablas relacionales en el LocalStorage, permitiendo gestionar productos, usuarios, categorías y detalles de transacciones.
* **Vista de Producto:** Interfaz capaz de leer parámetros de la URL (`URLSearchParams`) para inyectar dinámicamente títulos, descripciones, precios e imágenes desde la base de datos simulada, evitando la duplicación de archivos HTML.
* **Carrito de Compras Modular:** Sistema encapsulado mediante un `iframe` que permite añadir artículos, actualizar cantidades, calcular totales y eliminar productos globalmente sin recargar la página principal.
* **Recomendaciones Inteligentes:** Algoritmo que genera la sección "Complementa tu compra" extrayendo dinámicamente artículos de la base de datos y excluyendo el producto actualmente visualizado.
* **Maquetación UI/UX unificada:** Interfaces modernas y consistentes para el Inicio de sesión, Registro y Catálogo.

### Funcionalidad diferenciadora:
* **Compatibilidad Vehículo-Producto:** Un sistema que cruza la información de las tablas relacionales (Vehículo, Modelo, Marca y Producto) para indicarle al usuario con precisión si una refacción específica es compatible con su automóvil.

### Responsabilidad de cada integrante:
* **Jose Francisco Aquino Rivera:** Desarrollo de la lógica de la página de producto, y creación de la arquitectura de la base de datos simulada en LocalStorage.
* **Alexia María Félix Hernández:** 
* **Jose Guillermo Valencia Barrera:** Creacion de carrito, integracion del carrito en las demas paginas y logica de carrito, manejo de git  
* **Victor Yael Balandrán Pedroza:**
