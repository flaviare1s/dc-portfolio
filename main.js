import "./style.css"

function mostrarMenu() {
  const linkMenus = document.querySelectorAll('.link')
  const burgerMenu = document.querySelector('.burger')

  burgerMenu.addEventListener('click', () => {
    for (const linkMenu of linkMenus) {
      linkMenu.style.display = 'block'
    } 
  })
}

mostrarMenu()


    


