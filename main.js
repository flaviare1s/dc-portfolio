import "./style.css";

/* Função para criar um CONTADOR:
let count = 0

function criarContador() {
  const botaoDeIncremento = document.querySelector('#targetContadorButton')
  const outputEl = document.querySelector('#targetContadorOutput')

  botaoDeIncremento.addEventListener('click', () => {
    count++
    outputEl.innerHTML = count
  })
}
*/

// Função que quando mantém o mouse pressionado sobre o botão mosta '1' e quando despressiona mostra '0':
function clickDoMouse() {
  const botaoDeIncremento = document.querySelector('#targetContadorButton')
  const outputEl = document.querySelector('#targetContadorOutput')

  botaoDeIncremento.addEventListener('mousedown', () => {
    outputEl.innerHTML = 1
  })

  botaoDeIncremento.addEventListener('mouseup', () => {
    outputEl.innerHTML = 0
  })
}


function mouseLocation() {
  const mostrarX = document.querySelector('#outputX')
  const mostrarY = document.querySelector('#outputY')

  const tela = document.querySelector('#body')

  tela.addEventListener('mousemove', (event) => {
    const x = event.clientX
    const y = event.clientY
    
    mostrarX.innerHTML = x
    mostrarY.innerHTML = y
  })
}




function main() {
  // criarContador()
  clickDoMouse()
  mouseLocation()
}

main()





