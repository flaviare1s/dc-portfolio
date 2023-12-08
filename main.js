import "./style.css"

function mostrarMenu() {
  const linkMenus = document.querySelectorAll('.link')
  const burgerMenu = document.querySelector('.burger')

  burgerMenu.addEventListener('click', () => {
    for (const linkMenu of linkMenus) {
      if (linkMenu.style.display === 'none') {
        linkMenu.style.display = 'block'
      } else {
        linkMenu.style.display = 'none'
      }    } 
  })
}

mostrarMenu()


    


