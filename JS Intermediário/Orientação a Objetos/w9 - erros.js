let obj = [17]
let index = 300

try {
   if(!obj.includes(17)){
    throw new Error("O número 17 não está disponível")
   }

   if(index > 99){
    throw new RangeError("Numero está fora do intervalo")
   }
} catch (error) {
    if (error instanceof TypeError){
        console.log("Método indisponivel")
    } else if (error instanceof RangeError){
        console.log(error.message)
    }else {
        console.log("Não foi possivel realizar a ação!")
    }
}

class MyCustomError {
    constructor (message){
        this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message
    }
}

try {
    // throw new Error("Erro genérico")
    throw new MyCustomError("Erro personalizado lançado")
} catch (error) {
    if(error instanceof MyCustomError){
        console.log(error.message)
    }else{
        console.log("Não foi possivel executar")
    }
}