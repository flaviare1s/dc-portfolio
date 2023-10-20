import './style.css';

/*
function main() {
    const nome = prompt('Qual o seu nome?');
    const idade = prompt('qual a sua idade?');

    const nomidade = 'O seu nome é ' + nome + ' e a sua idade é ' + idade + '.'

    console.log(nomidade);
}
main();
*/

/*
function quadrado() {
    const numero = prompt('Digite um número')
    const quadrado = numero ** 2

    console.log('O quadrado do número ' + numero + ' é ' + quadrado + '.')
}
quadrado();
*/

/*
function main() {
    const x = true
    if (x) {
        console.log('Hello, World!')
    } else {
        console.log('É falso!')
    }
}
main();
*/

// Switch case conditions:
/*
function main(){
    const x = 1;

    switch (x) {
        case 0:
            console.log('x é 0');
            break;
        case 1:
            console.log('x é 1');
            break;
        default:
            console.log('x é um número diferente de 0 ou de 1');
            break;
    }
}
main();
*/

/*
function main() {
    const a = prompt('Digite um número!')
    const b = prompt('Digite outro número!')
    const c = prompt('Digite mais um número!')

    console.log(Number(a) + Number(b));

    if(a + b > c) {
        console.log(`A soma de ${a} e ${b} é maior do que ${c}.`)
    } else {
        console.log(`A soma de ${a} e ${b} não é maior do que ${c}.`)
    }
}
main();
*/

/*
function main() {
    const a = Number(prompt('Digite um número!'));
    const b = Number(prompt('Digite outro número!'));
    const c = a + b
    const d = a / b
   

    if(a === b) {
        console.log(c)
    } else {
        console.log(d)
    } 
    
    if (c % 3 === 0 || d % 3 === 0) {
        console.log('O resultado é divisível por 3.')
    } else {
        console.log('O resultado não é divisível por 3.')
    }
}
main();
*/

function main() {
    const nome = prompt('Digite um nome')
    console.log(nome.toUpperCase())
}
    
main();