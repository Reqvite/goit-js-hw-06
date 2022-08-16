const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulContainer = document.querySelector("ul");

 ingredients.forEach(ingredient => {
   const liRef = document.createElement('li');
   liRef.textContent = ingredient;
   liRef.classList.add('item');

   ulContainer.append(liRef);
})

// const anotherVersion = ingredients.map(ingredient => {
   
//   const liRef = document.createElement('li')
//   liRef.textContent = ingredient
//   liRef.classList.add('item')

//   ulContainer.append(liRef)
//  })
  