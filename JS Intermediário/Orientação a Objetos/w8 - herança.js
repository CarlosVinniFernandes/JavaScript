class User{
    showMessage(){
        console.log("Está é uma mensagem")
    }
}

const user = new User()

user.showMessage()


// Caso o método seja estático, pode usar sem estânciar uma classe
class User2{
    static showMessage2(){
        console.log("Está é uma mensagem usando static")
    }
}

User2.showMessage2()


// ---------------------------------------

class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Som genérico")
    }
}

class Dog extends Animal {
    makeNoise(){
        console.log("AuAu")
    }
}

const dog = new Dog()
dog.makeNoise()

class Cat extends Animal {
    makeNoise(){
        console.log("Miau")
    }
}

const cat = new Cat()
cat.makeNoise()

const animals = [new Dog(), new Cat()]

animals.forEach(animal => animal.makeNoise())