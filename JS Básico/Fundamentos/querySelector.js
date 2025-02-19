let guest = document.querySelector("#guest-1 span") // span no argumento faz com que o span nao seja excluido e sim modificaod


console.log(guest.textContent) // Retorna o conteúdo visível e oculto

guest.textContent = "Carlos Fernandes"

guest = document.querySelector("#guest-1") // span no argumento faz com que o span nao seja excluido e sim modificaod

console.log(guest.innerText) // Retorna apenas o resultado visível

console.log(guest.innerHTML) // 

let user = document.querySelector(".hide")

console.log(user.innerText.charAt(0))

if (user.innerText.charAt(0) == "0"){
}
else{
    user.className = ""
}