/**
 * Opens a modal
 * @param {*} modalContainer The element that contains the modal content
 * @param {*} modalOverlay The overlay that displays behind the modal
 * @example
 * const modalContainer = document.querySelector(".modal-content");
 * const modalOverlay = document.querySelector(".modal-overlay");
 *
 * openModal(modalContainer, modalOverlay);
 */
export function openModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
}

/**
 * Closes a modal
 * @param {*} modalContainer The element that contains the modal content
 * @param {*} modalOverlay The overlay that displays behind the modal
 * @example
 * const modalContainer = document.querySelector(".modal-content");
 * const modalOverlay = document.querySelector(".modal-overlay");
 *
 * closeModal(modalContainer, modalOverlay);
 */
export function closeModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "none";
  modalOverlay.style.display = "none";
}
