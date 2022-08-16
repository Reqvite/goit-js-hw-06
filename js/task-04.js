const valueRef = document.querySelector('#value')

const valueRefInfo = valueRef.textContent

let counterValue = Number(valueRefInfo);


const incrementButtonRef = document.querySelector('button[data-action="increment')
const decrementButtonRef = document.querySelector('button[data-action="decrement')


incrementButtonRef.addEventListener('click', () => {
    counterValue += 1
    valueRef.textContent = counterValue
})

decrementButtonRef.addEventListener('click', () => {
    counterValue -= 1
    valueRef.textContent = counterValue
})


