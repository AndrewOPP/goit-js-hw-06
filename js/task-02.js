const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const listArr = ingredients.map(item => {
  const li = document.createElement("li")
  li.classList.add("item")
  li.append(item)
 return li
})
list.append(...listArr)





// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement("li");
//   li.classList.add("item")
//   li.textContent = ingredients[i] 
//   list.prepend(li)
// }

