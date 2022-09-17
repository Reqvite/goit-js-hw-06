const textInputRef = document.querySelector('input')

textInputRef.addEventListener('blur', check)
 
function check(e) {
     if (event.currentTarget.value.length === Number(textInputRef.dataset.length)) {
         textInputRef.classList.remove('invalid')
         textInputRef.classList.add('valid')
         } 
     else {
         textInputRef.classList.remove('valid')
         textInputRef.classList.add('invalid')
     }
}



