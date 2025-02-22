const form = document.querySelector("form")
let expenseAmount = document.querySelectorAll(".expense-amount")
let ilQuantity = document.querySelector("ul").querySelectorAll("li").length
const amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const expenseList = document.querySelector("ul")
const expenseQuantity = document.getElementById("quantity")
const expensesTotal = document.querySelector("#total")




amount.oninput = () =>{
    let value = amount.value.replace(/\D/g, "")
    
    value = Number(value) / 100
    
    amount.value = formatCurrency(value)
}

// form.onsubmit = (event) => {
//     event.preventDefault()
    
//     const expense = document.querySelector("ul")
    
//     const newExpense = document.createElement("li")
//     newExpense.classList.add("expense")

//     const expenseCatergoryIcon = document.createElement("img")

//     const expenseCatergoryIconUser = document.querySelector("#category").value

//     switch (expenseCatergoryIconUser) {
//         case "food":
//             expenseCatergoryIcon.src = "./img/food.svg"
//             expenseCatergoryIcon.alt = "Ícone de tipo de despesa"

//             break;
//         case "accommodation":
//             expenseCatergoryIcon.src = "./img/accommodation.svg"
//             expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
//             break;
//         case "services":
//                 expenseCatergoryIcon.src = "./img/services.svg"
//                 expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
//                 break;
//         case "transport":
//                 expenseCatergoryIcon.src = "./img/transport.svg"
//                 expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
//                 break;
//         default:
//             break;
//     }

//     const div = document.createElement("div")
//     div.classList.add("expense-info")


//     let expenseName = document.querySelector("#expense").value
//     expenseName = expenseName.replace(expenseName.charAt(0), expenseName.charAt(0).toUpperCase())
//     const expenseCategory = document.querySelector("#category")
//     const expenseCategoryOption = expenseCategory.options[expenseCategory.selectedIndex]
//     const expenseCategoryName = expenseCategoryOption.textContent

//     div.innerHTML = `<strong> ${expenseName}</strong> <span>${expenseCategoryName}</span>`

//     const expenseValue = document.getElementById("amount")
//     const expenseValueFormat = document.createElement("span")
//     expenseValueFormat.classList.add("expense-amount")

//     console.log(expenseValue)
//     const format =  `<small>R$</small>${Number(formatCurrency(expenseValue).replace("R$", ""))}`

//     console.log(expenseValue)
//     expenseValueFormat.innerHTML = format

//     const removeIcon = document.createElement("img")
//     removeIcon.classList.add("remove-icon")
//     removeIcon.src = "./img/remove.svg"
//     removeIcon.alt = "Icone de remoção"

//     removeIcon.onclick = function(){
//         removeExpense()
//         // removeIcon.closest("li").remove();
//     }

//     newExpense.append(expenseCatergoryIcon, div, expenseValueFormat, removeIcon)
//     expense.prepend(newExpense)

//     const matematica = parseFloat(expenseValue.replace(".", "")) 
    
//     ilQuantity += 1
//     quantity.innerText = `${ilQuantity} despesas`
//     expenseAmount.forEach(item => console.log(item.textContent.replace("R$","").replace(",", "")))

// }

form.onsubmit = (event) =>{
    event.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
    try {
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o icone
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)


        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        // Cria o nome
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        // Cria o texto de categoria
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name
        
        // Adiciona o nome e categoria na div da informações
        expenseInfo.append(expenseName, expenseCategory)
        
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount.toUpperCase().replace("R$", "")}`

        // Adicionando icone de remover
        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.src = "./img/remove.svg"
        removeIcon.alt = "Icone de remoção"

        expenseItem.append(expenseIcon, expenseInfo, expenseAmount,removeIcon)

        expenseList.append(expenseItem)

        updateTotals()

    } catch (error) {
        alert("Não foi possivel atualizar as listas de despesas")
        console.log(error)
    }
    form.reset()
    expense.focus()
}

function formatCurrency(value){
    value = Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return value
}

function updateTotals(){
    try {
        const items = expenseList.children

        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`
        
        let total = 0

        for(let item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")
            
            console.log(itemAmount)

            let value = itemAmount.textContent.replace(/[^\d]/g, "").replace(",", ".")

            // convert valor para float

            console.log(value)
            value = parseFloat(value)

            console.log(value)
            // Verificando se é um número válido
            if(isNaN(value)){
                return alert ("Não foi possivel calcular o total")
            }

            total += Number(value)



        }

        
        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$"
        total = formatCurrency(total/100).toUpperCase().replace("R$", "")
        
        expensesTotal.innerHTML = ""

        expensesTotal.append(symbolBRL, total)


    } catch (error) {
        console.log(error)
        alert("Não foi possivel atualizar os totais!")
    }
}

expenseList.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-icon")){
        
        const item = event.target.closest(".expense")

        item.remove()
    }
    updateTotals()
})
