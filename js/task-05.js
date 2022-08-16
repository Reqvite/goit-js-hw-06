const textInputRef = document.querySelector("input");
const outputRef = document.querySelector("span");


textInputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value.length === 0) {
        outputRef.textContent = 'Anonymous'
    }
       else{outputRef.textContent = event.currentTarget.value} 
})

