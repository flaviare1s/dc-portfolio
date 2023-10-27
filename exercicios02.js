// FOR:

/*
function main() {
     // for convencional
    for (let x = 1; x <= 5; x++)
    console.log(x)
}
main()
*/

/*
function main() {
    // for each
    const array = ['a', 1, 'c']
    for (const item of array) {
        console.log(item)
    }
}
main()
*/

/*
function main() {
    // for each
    const array = ['a', 1, 'c']
    for (const key in array) {
        console.log(key)
    }
}
main()
*/
/*
function main() {
    const array = ['carro', 18, 'vermelho', 2014, 'azul', 'modelo']
    
    for(key in array) {
        const keyInt = Number(key)
        if(keyInt % 2 !== 0) {
            const item = array[key]
            console.log(item)
        }
    }
}
main()
*/

// Escreva um programa que receba um numero N e some todos os numeros de 1 ate este numero N:
/*
function somaTudo(num) {
    let soma = 0
    for ( let i = 1; i <= num; i++) {
        soma = soma += i
    }
    return soma
}

function main() {
    let n = Number(prompt('Digite um número!'))
    console.log(somaTudo(n))
}
main()
*/

// Escreva um programa que receba uma string, e me retorne quantas vezes a letra "a" aparece
/*
function main() {
    let totA = 0
    const palavra = prompt('Digite uma palavra!')

    for(const letra of palavra) {
        if (letra === 'a' || letra === 'A') {
            totA++
        }
    }
    console.log(`A palavra tem ${totA} letras A.`)
}
main()
*/





