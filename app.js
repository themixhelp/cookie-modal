const cookieAlert = document.querySelector(".cookies-alert")


const toggleAlert = () => {
    cookieAlert.classList.toggle("hide")

    const acceptedCookies = true
    localStorage.setItem("acceptedCookies", acceptedCookies.toString())
}

if (localStorage.getItem("acceptedCookies") === null){
    setTimeout(toggleAlert, 1000.0)
}