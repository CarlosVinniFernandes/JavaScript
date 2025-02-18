

const form = document.querySelector("form")
const input = document.querySelector("input")
const remove = document.querySelector("remove")

form.onsubmit = (event) =>{
    event.preventDefault()

    const items = document.querySelector("ul")

    const newItem = document.createElement("li")
    newItem.classList.add("items")
    
    const itemName = document.createElement("span")
    const img = document.createElement("img")
    const func = document.createElement("onclick")
    img.src = "Frame.svg";
    img.addEventListener("click", remover)

    itemName.textContent = input.value
    itemName.append(img)
    itemName.append(func)
    newItem.append(itemName)
    items.prepend(newItem)


    form.reset()
    
}

function remover(item){
    const current = document.querySelector("li")
    current.remove()
}
