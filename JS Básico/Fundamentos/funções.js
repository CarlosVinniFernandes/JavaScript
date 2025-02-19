function message() {
    console.log("Olá, é bom ter você aqui!");
    
}
message()
console.log("Olá");



/**
 * This function shows your name :)
 * @param {String} yourName your name
 */
function name(yourName){
    console.log("Olá, " + yourName)
}

const nome =  (name) => {
    console.log("Olá," , name);
}

nome("Carli")



function execute(taskName, callback){
    console.log("Executando a tarefa: " + taskName)

    callback()
}

function callback() {
    console.log("Tarefa finalizada.")
}

execute("Download do arquivo X", callback)

execute("Download do arquvio Y", obrigado = () =>{console.log("Volte sempre")})

execute("Download do arquvio Y", obrigado = () => console.log("Volte 2"))