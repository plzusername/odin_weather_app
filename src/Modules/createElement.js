export default function createElement(
  attributes = {},
  elementTag = "div",
  children = [],
  textContent = ""
) {
  const newElement = document.createElement(elementTag);

  newElement.innerText = textContent;

  attributes.keys.forEach((key) => {
    newElement.setAttribute(key, attributes[key]);
  });

  children.forEach((child) => {
    newElement.appendChild(child);
  });
}
