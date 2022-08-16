const textInputRef = document.querySelector("input");
const outputRef = document.querySelector("span");


textInputRef.addEventListener('input', (event) => 
    event.currentTarget.value.length === 0
    ? outputRef.textContent = 'Anonymous'
     : outputRef.textContent = event.currentTarget.value)



