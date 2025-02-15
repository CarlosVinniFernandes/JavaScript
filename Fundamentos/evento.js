window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

window.addEventListener("click", (e) => {
    e.preventDefault()
    
    // Mostra as informações do evento
    //console.log(e)

    // retorna o elemento clicado
    // console.log(e.target)
    console.log(e.target.textContent)
})