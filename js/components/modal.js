const modalOverlay = document.querySelector(".modal-overlay");

export function openModal(modalContainer) {
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
};

export function closeModal(modalContainer) {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
};