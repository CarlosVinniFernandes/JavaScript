console.log(user)
var user = "Carlos"
{
    var leta = "Letal"
    console.log(user)
}
console.log(leta)

console.log(`
            Muito
            legal
            usar
            crase`)

let username = "Carlos"
let email = "carloz@gmail.com"

console.log(username, email)
console.log(`Olá, ${username}. Seu email é ${email}`);

let verdade = true

console.log(verdade ? "Verdader" : "Falso man")

try {
    console.log(result)
} catch (error) {
    console.log("teste");
    console.log(error);
    
} finally {
    console.log("fim")
}

let result = 0
try {
    if(result === 0){
        throw new Error("O valor é igual a zero :(");
        
    }
} catch (error) {
    console.log(error);
} finally{
    console.log("fim")
}