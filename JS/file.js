const initButtons = () => {
  let button = document.querySelector(".svg-menu")
  let menu = document.querySelector(".menu")

  if (button) {
    button.addEventListener("click", () => {
      button.classList.toggle("open")
      menu.classList.toggle("sm-invisible")
    })
  }
}

window.addEventListener("load", initButtons)