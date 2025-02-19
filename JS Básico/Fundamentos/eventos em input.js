const form = document.querySelector("form")

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    console.log("Olá")
})

// keydown > quando uma tecla é pressionada (captura tudo: ctrl, shift...)

const input = document.querySelector("input")
// input.addEventListener("keydown", (event) =>{
//     console.log(event.key)
// })


// Ignora tudo que não é caracter
input.addEventListener("keypress", (event) =>{
    console.log(event)
})

input.addEventListener("change", (event) =>{
    console.log("O input mudou")
})