/**
 * Creates a message container and displays a message
 * @param {*} parentElement The HTML element to append the message  to
 * @param {string} messageType The CSS class to give the message
 * @param {string} messageText The actuall text message
 * @example
 * const blogPostContainer = document.querySelector(".blogpost");
 * createMessage(blogPostContainer, "error", "There was a problem loading this blogpost")
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(messageType);
  message.innerText = messageText;

  parentElement.append(message);
}
