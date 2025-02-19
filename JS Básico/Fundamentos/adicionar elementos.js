const guests = document.querySelector("ul")
//console.log(guests.innerHTML)

const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Carlos"

const guestLastName = document.createElement("span")

guestLastName.textContent = "Fernandes"
newGuest.append(guestName)

//newGuest.prepend(guestLastName)

// É mais simpeles que o append, mas adiciona apenas um -> appendChild

guests.prepend(newGuest)

/*
const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")
guestName.textContent = "Carlos"

newGuest.appendChild(guestName)

guests.prepend(newGuest)

console.log(newGuest.innerHTML)
 */

const input = document.querySelector("input")

// input.setAttribute("disabled", true)

// input.setAttribute("type", "file")

