/**
 * Creates a message container and displays a message
 * @param {*} parentElement Which HTML element to append the message container to
 * @param {string} messageType The CSS class to give the message container
 * @param {string} messageText The actuall text messate
 * @example
 * createMessage(blogPostContainer, "error", "There was a problem loading this blogpost")
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(messageType);
  message.innerText = messageText;

  parentElement.append(message);
}
