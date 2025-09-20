import { Dropdown, Modal } from 'flowbite';

// Inicializar dropdown solo si tienes lógica propia
const dropdownEl = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
if (dropdownEl && dropdownMenu) {
  new Dropdown(dropdownMenu, dropdownEl);
}

// Inicializar modal solo si tienes lógica propia
const modalEl = document.getElementById("mi-modal");
if (modalEl) {
  new Modal(modalEl);
}