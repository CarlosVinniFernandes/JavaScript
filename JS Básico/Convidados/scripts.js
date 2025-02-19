const input = document.querySelector("input")
const button = document.querySelector("button")
const form = document.querySelector("form")


form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const value = input.value
        const guests = document.querySelector("ul")

        const newGuest = document.createElement("li")
        newGuest.classList.add("guest")

        const guestName = document.createElement("span")
        guestName.textContent = value[0].toUpperCase() + value.slice(1)

        newGuest.append(guestName)
        guests.prepend(newGuest)
        form.reset()
})