const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}
const array = []

refs.input.addEventListener('input', (event) => {
 let value = event.currentTarget.value
  array.push(value)
})

refs.buttonCreate.addEventListener('click', () => {
  createBoxes(array[array.length - 1]) 
})

refs.buttonDestroy.addEventListener('click', () => {
  refs.boxesContainer.innerHTML = ''
})

let boxSize = 30;

function createBoxes(amount) {
  for (let i = 1, boxSize = 30 ; i <= amount; i += 1, boxSize +=10) {
  const newBox = document.createElement('div');
  newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.append(newBox)
} 
}