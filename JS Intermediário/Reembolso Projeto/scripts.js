const form = document.querySelector("form")


let ilQuantity = document.querySelector("ul").querySelectorAll("li").length
const quantity = document.getElementById("quantity")

console.log(quantity)

form.onsubmit = (event) => {
    event.preventDefault()
    
    const expense = document.querySelector("ul")
    
    const newExpense = document.createElement("li")
    newExpense.classList.add("expense")

    const expenseCatergoryIcon = document.createElement("img")

    const expenseCatergoryIconUser = document.querySelector("#category").value

    switch (expenseCatergoryIconUser) {
        case "food":
            expenseCatergoryIcon.src = "./img/food.svg"
            expenseCatergoryIcon.alt = "Ícone de tipo de despesa"

            break;
        case "accommodation":
            expenseCatergoryIcon.src = "./img/accommodation.svg"
            expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
            break;
        case "services":
                expenseCatergoryIcon.src = "./img/services.svg"
                expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
                break;
        case "transport":
                expenseCatergoryIcon.src = "./img/transport.svg"
                expenseCatergoryIcon.alt = "Ícone de tipo de despesa"
                break;
        default:
            break;
    }

    const div = document.createElement("div")
    div.classList.add("expense-info")


    let expenseName = document.querySelector("#expense").value
    expenseName = expenseName.replace(expenseName.charAt(0), expenseName.charAt(0).toUpperCase())
    const expenseCategory = document.querySelector("#category")
    const expenseCategoryOption = expenseCategory.options[expenseCategory.selectedIndex]
    const expenseCategoryName = expenseCategoryOption.textContent

    div.innerHTML = `<strong> ${expenseName}</strong> <span>${expenseCategoryName}</span>`

    const expenseValue = document.querySelector("#amount").value.replace(",",".")
    const expenseValueFormat = document.createElement("span")
    expenseValueFormat.classList.add("expense-amount")

    const format =  `<small>R$</small>${Number(expenseValue).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).replace("R$", "")}`

    expenseValueFormat.innerHTML = format

    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.src = "./img/remove.svg"
    removeIcon.alt = "Icone de remoção"

    removeIcon.onclick = function(){
        removeExpense()
        // removeIcon.closest("li").remove();
    }

    newExpense.append(expenseCatergoryIcon, div, expenseValueFormat, removeIcon)
    expense.prepend(newExpense)

    const matematica = parseFloat(expenseValue.replace(".", "")) 
    
    ilQuantity += 1
    quantity.innerText = `${ilQuantity} despesas`

}
quantity.innerText = `${ilQuantity} despesas`

function removeExpense(){
    const input = document.querySelector("li")
    input.remove()
    ilQuantity -= 1
    quantity.innerText = `${ilQuantity} despesas`
}
