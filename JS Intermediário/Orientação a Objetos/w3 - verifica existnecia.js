const user = {
    name: "Rodrigo",
    // address: {
    //     street: "Avenida Brasil",
    //     city: "São Paulo",
    //     geo:{
    //         latitude: 47.808,
    //         longitude: 17.6674
    //     },
    // },
    message: function() {
        console.log("Olá mundo!")
    },
}

// Interrogação é caso não saiba se a propriedade existe
console.log(user?.address?.street)

user.message?.()