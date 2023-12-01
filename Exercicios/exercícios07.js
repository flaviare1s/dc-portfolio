// Funções para localizar a posição do mouse na tela e mudar cor do background ao clicar

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
        const red = (x / window.innerWidth) * 255
        const green = (y / window.innerHeight) * 255
  
        console.log(red, green)
  
        tela.style.backgroundColor = `rgb(${red}, ${green}, 0)`
      })
    })
  }
  
  function main() {
    document.addEventListener('DOMContentLoaded', () => {
      mouseLocation()
    })
  }
  
  main()
  