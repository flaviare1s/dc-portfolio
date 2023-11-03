// Fatorial
/*
function fatorial() {
    const n = Number(prompt('Digite um número!'))
    let x = 1

    for (let c = n; c >= 1; c--) {
        x = x * c
    }
    console.log(x)
}
fatorial()
*/
/*
function fatorial() {
    const n = Number(prompt('Digite um número inteiro!'))
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial())
*/


// Calcule a divisão de dois números fatoriais m e n:

function getMaiorNumero(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function getMenorNumero(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}


function calcDivFatorialNumeros(a, b) {
    let valor = 1
    const maior = getMaiorNumero(a, b)
    const menor = getMenorNumero(a, b)

    for (let i = menor + 1; i <= maior; i++) {
        valor = valor * i
    }
    return valor

}


function main() {
    const m = 300
    const n = 200
    const divFatorial = calcDivFatorialNumeros(m, n)

    console.log(`O resultado da divisão é ${divFatorial}.`)
}
main()