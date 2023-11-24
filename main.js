import "./style.css";

let count = 0

function criarContador() {
  const botaoDeIncremento = document.querySelector('#targetContadorButton')
  const outputEl = document.querySelector('#targetContadorOutput')

  botaoDeIncremento.addEventListener('mousedown', () => {
    outputEl.innerHTML = 1
  })
  
botaoDeIncremento.addEventListener('mouseup', () => {
  outputEl.innerHTML = 0
})
}

function main() {
  criarContador()
}

main()





