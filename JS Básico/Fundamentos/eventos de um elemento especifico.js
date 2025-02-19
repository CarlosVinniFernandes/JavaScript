const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop)

    if(ul.scrollTop > 300){
        console.log("fim da lista!")
        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})

const button = document.querySelector("button")
button.addEventListener("click" , (event) => {
    event.preventDefault()

    const guest = document.querySelector("ul")

    const newGuest = document.querySelector("li")
    newGuest.classList.add("guest")

    const guestName = document.querySelector("span")
    guestName.textContent = "Carlos"

    newGuest.append(guestName)

    guest.prepend(newGuest)
})