export function $(selector) {
  const elem = document.querySelector(selector);
  return elem;
}

export function create(elemType = 'div', appendToElement, props) {
  const elem = document.createElement(elemType);
  if (props) {
    Object.entries(props).forEach(([key, value] = prop) => {
      elem[key] = value;
    })
  }
  if (appendToElement) {
    appendToElement.appendChild(elem);
  }
  return elem;
}