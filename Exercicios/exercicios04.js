// map, filter e reduce:


// map modifica os itens do array. 
// Exercício com map:
// Exercício 01:
// Dado o array [2, 4, 6, 15, 7, 9, 11, 300], retorne um array com o quadrado dos itens:

/*
function main() {
    const array = [2, 4, 6, 15, 7, 9, 11, 300]
    const arrayAoQuadrado = array.map(function(item){
        return item * item
    })

    console.log(arrayAoQuadrado)
} 
main()
*/

// filter filtra o array e retorna apenas alguns itens.
// Exercício com filter:

// Exercício 02:

// Dado o array [2, 4, 6, 15, 7, 9, 11, 300], retorne outro array somente com os números  menores do que 4 ou maiores do que 9:
/*
function main() {
    const array = [2, 4, 6, 15, 7, 9, 11, 300]
    const arrayFiltrado = array.filter((item) => {
        return item < 4 || item > 9  
     })
    console.log(arrayFiltrado)
}
main()
*/


// reduce calcula um resultado baseado nos itens do array e gera um array diferente.
// Exercício com reduce:
// Exercício 03:
// Dado o array [2, 4, 6, 15, 7, 9, 11, 300], retorne a soma dos numeros deste array.
/*
function main() {
    const array = [2, 4, 6, 15, 7, 9, 11, 300]
    const soma = array.reduce((acc, item) => {
        return acc + item
    }, 0)
    console.log(soma)
}
main()
*/

// Exercício 04:
// Dado o array [2, 4, 6, 15, 7, 9, 11, 300], gere um array somente com os números pares.
/*
function main() {
    const array = [2, 4, 6, 15, 7, 9, 11, 300]
    const arrayPares = array.filter((item) => {
            return item % 2 === 0
    })
    console.log(arrayPares)
}
main()
*/

// Exercício 05:
// Dado o seguinte array: [300, 502, 501, 437, 991, 301, 1, -50, 3000], retorne quantos números abaixo de 501 existem.
/*
function main() {
    const array = [300, 502, 501, 437, 991, 301, 1, -50, 3000]
    const arrayReduce = array.reduce((acc, item) => {
        if (item < 501) {
            return acc + 1
        }
        return acc
    }, 0)
    console.log(arrayReduce)
}
main()
*/