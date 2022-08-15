const listCategoriesRef = (document.querySelectorAll('.item')).length
console.log(`Number of categories: ${listCategoriesRef}`);

const categoriesNameRef = document.querySelectorAll('h2')

categoriesNameRef.forEach(element => {
    console.log(`Category: ${element.textContent}`)
    console.log(`Elements: ${element.nextElementSibling.children.length}`);

} )

