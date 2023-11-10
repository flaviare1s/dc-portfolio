import "./style.css";

// Exiba no console uma lista dos nomes dos jogos do array abaixo;
// Filtre os jogos que estão abaixo de $120 e exiba a lista no console;
// Exiba no console o valor total da soma de todos os jogos acima de $120;
// Exiba a lista de jogos em ordem alfabética.

// Dica: para quebrar linha, você pode usar dentro da string o caractere especial \n.

const jogos = [
  { name: "Dark Souls III", price: 95.03 },
  { name: "Shadow of the Tomb Raider", price: 101.19 },
  { name: "Sekiro: Shadows Die Twice", price: 179.99 },
  { name: "Resident Evil 2", price: 119.9 },
  { name: "Death Stranding", price: 149.99 },
];

function nomes() {
  const nomesJogos = jogos.reduce((acc, jogo, index) => {
    if (index !== 0) {
      return acc + "," + jogo.name;
    }

    return acc + jogo.name;
  }, "");
  console.log(nomesJogos);
  return nomesJogos
}

nomes();


function precosAbaixo() {
    const jogosAbaixoDe120 = jogos.filter((jogo) => {
        return jogo.price < 120
    })
    console.log(jogosAbaixoDe120)
} 

precosAbaixo()


function precosAcima() {
    const jogosAcimaDe120 = jogos.filter((jogo) => {
        return jogo.price > 120
    })
    return jogosAcimaDe120
} 


function somaPrecosAcima() {
    const jogosAcimaDe120 = precosAcima()
    const somaJogosAcimaDe120 = jogosAcimaDe120.reduce((acc, jogo) => {
        return acc + jogo.price
    },0)
    console.log(somaJogosAcimaDe120)
}

somaPrecosAcima()

function ordemAlfabetica() {
    const sortedJogos = jogos.sort((a,b) => {
        const nomeA = a.name.toUpperCase()
        const nomeB = b.name.toUpperCase()

        if (nomeA > nomeB) {
            return 1
        }
        return -1
    })
    console.log(sortedJogos)
}

ordemAlfabetica()