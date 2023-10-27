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

/*
function main() {
    const nome = prompt('Digite um nome usando letras minúsculas.')
    if (nome.match(/[a-z]/)) {
        console.log(nome.toUpperCase())
    } else {
        console.log('O que você digitou é inválido!')
    }
}
main();
*/
/* Precisa consertar esse código:
function toUpperCase(letra) {
    switch(letra) {
        case 'a':
            return 'A';
        case 'b':
            return 'B';
        case 'c':
            return 'C';
        case 'd':
            return 'D';
        case 'e':
            return 'E';
        case 'f':
        return 'F';
        case 'g':
            return 'G';
        case 'h':
            return 'H';
        case 'i':
            return 'I';
        case 'j':
            return 'J';
        case 'k':
            return 'K';
        case 'l':
            return 'L';
        case 'm':
            return 'M';
        case 'n':
            return 'N';
        case 'o':
            return 'O';
        case 'p':
            return 'P';
        case 'q':
            return 'Q';
        case 'r':
            return 'R';
        case 's':
            return 'S';
        case 't':
            return 'T';
        case 'u':
            return 'U';
        case 'v':
            return 'V';
        case 'w':
            return 'W';
        case 'x':
            return 'X';
        case 'y':
            return 'Y';
        case 'z':
            return 'Z';
        default:
            return 'Digite um caractere válido'
    }
    function main() {
        console.log(toUpperCase(a))
    }
    main()
}
*/

/*
function toUppercase(letra) {
    const mapeamentoDeLetras = {
        'a': 'A',
        'b': 'B',
        'c': 'C',
        'd': 'D',
        'e': 'E',
        'f': 'F',
        'g': 'G',
        'h': 'H',
        'i': 'I',
        'j': 'J',
        'k': 'K',
        'l': 'L',
        'm': 'M',
        'n': 'N',
        'o': 'O',
        'p': 'P',
        'q': 'Q',
        'r': 'R',
        's': 'S',
        't': 'T',
        'u': 'U',
        'v': 'V',
        'w': 'W',
        'x': 'X',
        'y': 'Y',
        'z': 'Z',
        'A': 'A',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'E',
        'F': 'F',
        'G': 'G',
        'H': 'H',
        'I': 'I',
        'J': 'J',
        'K': 'K',
        'L': 'L',
        'M': 'M',
        'N': 'N',
        'O': 'O',
        'P': 'P',
        'Q': 'Q',
        'R': 'R',
        'S': 'S',
        'T': 'T',
        'U': 'U',
        'V': 'V',
        'W': 'W',
        'X': 'X',
        'Y': 'Y',
        'Z': 'Z',
    }

    const letraMaiuscula = mapeamentoDeLetras[letra]; // undefined

    if (letraMaiuscula) {
        return letraMaiuscula;
    }

    return 'Caractere inválido';
}

function main() {
    console.log(toUppercase('a'));
    console.log(toUppercase('b'));
    console.log(toUppercase('B'));
    console.log(toUppercase('4'));
}

main();
*/

/*
Maior de dois números: Peça ao usuário para inserir dois números e, em seguida, escreva um programa que determine qual dos números é o maior.
*/
/*
function maior() {
    let n1 = Number(prompt('Digite um número!'));
    let n2 = Number(prompt('Digite outro número!'));
    if(n1 === n2) {
        console.log('Você digitou dois números iguais')
    } else if(n1 > n2) {
        console.log(`O número ${n1} é o maior valor que você digitou.`)
    } else {
        console.log(`O número ${n2} é o maior valor que você digitou.`)
    }
}
maior()
*/

/*
Calculadora simples: Crie uma calculadora simples que permita ao usuário escolher entre operações de adição, subtração, multiplicação e divisão. Peça ao usuário para inserir dois números e a operação desejada, depois calcule e exiba o resultado.
*/

function calcular(n1, n2, operacao) {
    if(operacao === '+') {
        return n1 + n2
    } 
    if(operacao === '-') {
        return n1 - n2
    } 
    if(operacao === '*') {
        return n1 * n2
    } 
    if(operacao === '/') {
        return n1 / n2
    } 
    return 'operação inválida'
}

function main() {
    const n1 = Number(prompt('Digite um número!'));
    const n2 = Number(prompt('Digite outro número!'));
    const operacao = prompt('Digite a operação desejada (+, -, /, *)');
    const resultado = calcular(n1, n2, operacao);
    console.log(resultado)
}
main()

/*
Verificação Par/Ímpar: Solicite ao usuário que insira um número e escreva um programa que determine se o número é ímpar ou par. Exiba uma mensagem apropriada.
*/
/*
function parImpar() {
    let n = Number(prompt('Digite um número'))
    if(n % 2 === 0) {
        console.log('O número que você digitou é PAR!')
    } else {
        console.log('O numero que você digitou é ÍMPAR!')
    }
}
parImpar()
*/

/*
Idade para dirigir: pergunte ao usuário sua idade e informe se ele é elegível para obter uma carteira de motorista.
*/
/*
function main() {
    let idade = Number(prompt('Digite a sua idade'))
    if(idade >= 18) {
        console.log('Você está apto a tirar a carteira de motorista!')
    } else {
        console.log('Você não tem idade suficiente para tirar a carteira de habilitação!')
    }
}
main()
*/