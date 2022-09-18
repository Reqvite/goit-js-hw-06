const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}

refs.buttonCreate.addEventListener('click', createBoxes)
refs.buttonDestroy.addEventListener('click', () => {
  refs.boxesContainer.innerHTML = ''
})

let saveSize = 30;
function createBoxes() {
  for (let i = 1, boxSize = saveSize; i <= Number(refs.input.value); i += 1, boxSize +=10) {
  const newBox = document.createElement('div');
  newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.append(newBox)
    saveSize = boxSize
} 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}