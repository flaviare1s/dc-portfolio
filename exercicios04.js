// map, filter e reduce:

// Exercício 01:
// Dado o array [2, 4, 6, 15, 7, 9, 11, 300], retorne um array com o quadrado dos itens:

function main() {
    const array = [2, 4, 6, 15, 7, 9, 11, 300]
    const arrayAoQuadrado = array.map(function(item){
        return item * item
    })
    console.log(arrayAoQuadrado)
} 
main()