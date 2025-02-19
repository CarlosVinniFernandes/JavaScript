console.log(document.title)

const guest = document.getElementById("guest-2")

console.log(guest);

console.dir(guest)

const guestsByClass = document.getElementsByClassName("guest")

console.log(guestsByClass)

console.log(guestsByClass.item(0))

console.log(guestsByClass[0])


const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)

// Acessando pelo seletor ID
const guest1 = document.querySelector("#guest-1")
console.log(guest1)

console.log("---------------------")

// const guest2 = document.querySelector(".guest")
// console.log(guest2)

const guest2 = document.querySelectorAll(".guest")
console.log(guest2)


