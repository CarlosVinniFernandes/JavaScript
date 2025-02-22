const expenses = document.querySelector("ul")

const newExpense = document.createElement("li")
newExpense.classList.add("expense")

const img = document.createElement("img")
img.src = "./img/food.svg"
img.alt = "Food icon"

const expenseName = document.createElement("strong")
const expenseCategory = document.createElement("span")

const div = document.createElement("div")
div.classList.add("expense-info")

expenseName.textContent = "Almoço"
expenseCategory.textContent = "Alimentação"
div.append(expenseName, expenseCategory)

const expenseAmount = document.createElement("span")
expenseAmount.classList.add("expense-amount")

const amount = Number(1402.57).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL"
})

expenseAmount.innerHTML = amount.replace("R$", "<small>R$</small>")


const imgRemove = document.createElement("img")
imgRemove.classList.add("remove-icon")
imgRemove.src = "./img/remove.svg"
imgRemove.alt = "Remove expense icon"

newExpense.append(img, div, expenseAmount, imgRemove)

expenses.prepend(newExpense)


const valor = document.querySelector(".expense-amount")

console.log(valor.innerHTML)
console.log(valor.textContent)

const valorNumerico = (valor.textContent).replace("R$", "")

console.log(Number(valorNumerico));

const valorNumerico2 = valorNumerico.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
    
})
console.log(valorNumerico2)
// console.log(parseFloat(valor.replace(/[^0-9.-]/g, '')))

