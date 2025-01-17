// Selecciona los elementos principales
const customSelect = document.querySelector(".custom-select");
const selectButton = customSelect.querySelector(".select-button");
const options = customSelect.querySelectorAll(".option");

// Abrir y cerrar el menú
customSelect.addEventListener("click", (e) => {
    // Previene que el evento cierre el menú inmediatamente después de abrir
    e.stopPropagation();
    customSelect.classList.toggle("active");
});

// Seleccionar una opción
options.forEach((option) => {
    option.addEventListener("click", (e) => {
        // Actualiza el texto del botón
        selectButton.textContent = option.textContent;
        // Cierra el menú
        customSelect.classList.remove("active");
        // Previene la propagación para no cerrar accidentalmente al seleccionar
        e.stopPropagation();
    });
});

// Cerrar el menú al hacer clic fuera del contenedor
document.addEventListener("click", () => {
    customSelect.classList.remove("active");
});
