// Caso não exista o da esquerda, aparece a mensagem da direita

const content = null // ou undefined
console.log(content ?? "Conteúdo padrão")

const content2 = "Carlos"
console.log(content2 ?? "Conteúdo padrão")

const user = {
    name: "Carlos",
    picture: undefined,
}

console.log(user.picture ?? "Sem foto")