const user = {
    email: "carlos@gmail.com",
    age: 21,
    // estrutura de objeto alinhada
    name: {
        fist_name: "Carlos",
        surname: "Fernandes",
    },
    
address: {
    street: "Rua X",
    number: 84,
    city: "Belém",
    postal_code: "66075-240",
    },

    message: () =>{
        console.log("Olá mundo!")
    },
}

user.message()
console.log(user.name.fist_name)
console.log(user["address"]["city"])