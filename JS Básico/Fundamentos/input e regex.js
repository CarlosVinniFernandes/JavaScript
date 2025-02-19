const input = document.querySelector("input")
const form = document.querySelector("form")

input.addEventListener("input", () =>{
    console.log(input.value)

    const value = input.value

    const regex = /\D+/g

    // Retorna o padrão encontrado na String
    // console.log(value.match(regex))

    // Testa para ver se é válido
    // const isValid = regex.test(value)
    // console.log(isValid)

    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const regex = /\D+/g
        const value = input.value

        if(regex.test(value)){
            alert("Padrão encontrado!")
        }
        else{
            alert("Padrão não encontrado!")
        }

        // const value = input.value.replace(regex, "")
        // console.log(value)
    })
})