const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulContainer = document.querySelector("ul");


const createList = ingredients.map(ingredient => {
   
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');
 
  return liRef
 })
  
 ulContainer.append(...createList)