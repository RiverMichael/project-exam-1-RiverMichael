import { validateEmail, validateLength } from "./components/formValidation.js"
import { openModal, closeModal } from "./components/modal.js"

const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const contactValidation = document.querySelector(".contact-validation");
const modalOverlay = document.querySelector(".modal-overlay");
const validationCloseButton = document.querySelector(".icon-close");

form.addEventListener("submit", validateForm);
modalOverlay.addEventListener("click", () => closeModal(contactValidation, modalOverlay));
validationCloseButton.addEventListener("click", () => closeModal(contactValidation, modalOverlay));

// Validate Contact Form
function validateForm(event) {
    event.preventDefault();
    if (validateLength(name, name.value, 5, nameError) && validateEmail(email, email.value, emailError) && validateLength(subject, subject.value, 15, subjectError) && validateLength(message, message.value, 25, messageError)) {
        form.reset();
        openModal(contactValidation, modalOverlay);
    }
};
