export default function createElement(
  attributes = {},
  elementTag = "div",
  children = [],
  textContent = ""
) {
  const newElement = document.createElement(elementTag);

  newElement.innerText = textContent;

  if (attributes.keys) {
    attributes.keys.forEach((key) => {
      newElement.setAttribute(key, attributes[key]);
    });
  }
  if (children.length > 0) {
    children.forEach((child) => {
      newElement.appendChild(child);
    });
  }

  return newElement;
}
