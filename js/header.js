const themeButton = document.querySelector("[data-theme-toggle]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");

if (themeButton) {
    const updateThemeLabel = () => {
        themeButton.setAttribute(
            "aria-label",
            document.documentElement.dataset.theme === "light"
                ? "Cambiar a tema oscuro"
                : "Cambiar a tema claro"
        );
    };

    themeButton.addEventListener("click", () => {
        const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("autobox:theme", theme);
        } catch (error) {
            console.error("No se pudo guardar el tema seleccionado.", error);
        }
        const cartFrame = document.querySelector("#cart-frame");
        if (cartFrame && cartFrame.contentWindow) {
            cartFrame.contentWindow.postMessage({ type: "autobox:theme", theme }, "*");
        }
        updateThemeLabel();
    });

    updateThemeLabel();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
}
