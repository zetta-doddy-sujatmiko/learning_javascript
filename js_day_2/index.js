let firstBook = 'Sapiens'
const secondBook = 'Homodeus'

console.log(firstBook===secondBook)

const firstBookPrice = 100000
const secondBookPrice = 700000

console.log(firstBookPrice == secondBookPrice ? "Those 2 books have the same price" :
    firstBookPrice > secondBookPrice ? "firstBookPrice is the highest price" : "secondBookPrice is the highest price"
)

const averagePrice = (firstBookPrice + secondBookPrice) / 2

const firstBookValue = firstBookPrice > 500000 ? "Expensive" : "Cheap"
const secondBookValue = secondBookPrice > 500000 ? "Expensive" : "Cheap"

console.log("firstBookPrice is", firstBookValue)
console.log("secondBookPrice is", secondBookValue)