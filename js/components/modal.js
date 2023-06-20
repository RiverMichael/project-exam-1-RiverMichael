export function openModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
}

export function closeModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "none";
  modalOverlay.style.display = "none";
}
