import './style.css';

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

function fatorial() {
    const n = Number(prompt('Digite um número inteiro!'))
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial())



// Calcule a divisão de dois números fatoriais M e N: