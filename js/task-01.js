const numberOfCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${numberOfCategories.length}`)

const arrayOfCategories = [...numberOfCategories]
arrayOfCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)

})