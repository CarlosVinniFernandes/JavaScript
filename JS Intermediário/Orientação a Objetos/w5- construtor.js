function createProduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log("O nome do produto é " + this.name)
    }

    return product
}

const p1 = new createProduct("Teclado")
console.log(p1.name)
p1.details()

const p2 = new createProduct("Mouse")
console.log(p2.name)
p2.details()

let date = new Date("2025-2-18")
console.log(date)

function Person(name){
    this.name = name
    this.message = function(){
        console.log("Olá " + this.name)
    }
}

const person1 = new Person()
console.log(person1.name)