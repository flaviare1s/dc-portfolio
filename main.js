import "./style.css"

function mouseLocation() {
  const mostrarX = document.querySelector('#outputX')
  const mostrarY = document.querySelector('#outputY')
  const tela = document.querySelector('body')

  tela.addEventListener('mousemove', (event) => {
    const x = event.clientX
    const y = event.clientY

    mostrarX.innerHTML = x
    mostrarY.innerHTML = y

    tela.addEventListener('click', () => {
      const mousePosition = (x + y) / 2
      console.log(mousePosition)
      tela.style.backgroundColor = `rgb(${mousePosition}, ${mousePosition}, ${mousePosition})`
    })
  })
}

function main() {
    mouseLocation()
}


main()




