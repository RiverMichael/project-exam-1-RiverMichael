/**
 * Validates if an input is a valid email adress or displays an error message
 * @param {*} input The element where the email is entered
 * @param {*} value The value of the input
 * @param {string} errorMessage The error message
 * @returns An error message if the input is not a valid email adress
 * @example
 *
 * const email = document.querySelector("#email");
 * validateEmail(email, email.value, "Please enter a valid email");
 */
export function validateEmail(input, value, errorMessage) {
  const regEx = /\S+@\S+\.\S+/;
  const result = regEx.test(value);

  if (result) {
    input.style.border = "2px solid #7DA87B";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    input.style.border = "2px solid var(--clr-error)";
  }
  return result;
}

/**
 * Validates the length of an input or displays an error message
 * @param {*} input The element of the input
 * @param {*} value The value of the input
 * @param {number} length The minimum length
 * @param {string} errorMessage The error message
 * @returns An error message if the inputs lenght is too short
 * @example
 *
 * const name = document.querySelector("#name");
 * validateLength(name, name.value, 3, "Please enter a name with min. 4 characters");
 */
export function validateLength(input, value, length, errorMessage) {
  if (value.trim().length > length) {
    input.style.border = "2px solid #7DA87B";
    errorMessage.style.display = "none";
    return true;
  } else {
    errorMessage.style.display = "block";
    input.style.border = "2px solid var(--clr-error)";
    return false;
  }
}
