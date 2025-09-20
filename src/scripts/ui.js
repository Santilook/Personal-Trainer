import { Dropdown, Modal } from "flowbite";

// Inicializar dropdown
const dropdownEl = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
if (dropdownEl && dropdownMenu) {
  new Dropdown(dropdownMenu, dropdownEl);
}

// Inicializar modal
const modalEl = document.getElementById("mi-modal");
if (modalEl) {
  new Modal(modalEl);
}