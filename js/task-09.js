function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const colorNameSpanRef = document.querySelector("span");
const buttonRef = document.querySelector('button');


buttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameSpanRef.textContent = getRandomHexColor();
})