const newArray = new Array(10)

console.log(newArray.length)

let fruits = ['Apple', 'Banana', 'Orange']
console.log(fruits[5] ?? "Não exister")
console.log(fruits[fruits.length-1])

let fullName = "Carlos Vinnicius Fernandes"

fullName.split(" ")

// Cria um array com as letras
console.log(Array.from(fullName))

let users = []

// Adiciona ao final do Array
users.push("Carlos")
users.push("João")
users.push("Marcos")

// Adiciona um item ao inicio do Array
users.unshift("Ana")

// Remove do inicio do Array
users.shift()

// Remove do final do Array
users.pop()

let fruits2 = ['Apple', 'Banana', 'Orange']

// Encontra e retorna um índice do Array
let position = fruits2.indexOf("Apple")

console.log(position)

// Remove do 1 até o 2
//fruits2.splice(1,2)

// remove apenas o position
fruits2.slice(position,1)

let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log('função foda')
    },
    {
        name: "Rodrigo",
        email: "carlos@gmail.com",
    },
]

myArray[3]()

let fruits3 = ['Apple', 'Banana' , 'Orange']

// Verifica se existe no array
console.log(fruits3.includes("Apple"))

for (let fruit of fruits3){
    console.log(fruit)
}
