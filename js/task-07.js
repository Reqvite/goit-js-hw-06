const inputRangeControlRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRangeControlRef.addEventListener('change', (event) => {
    textRef.style.fontSize = `${event.currentTarget.value}px`
    
})