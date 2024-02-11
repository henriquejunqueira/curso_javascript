const lista = [
    {
        nome: 'Henrique',
        idade: 30,
        exibir: true
    },
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Fernanda',
        idade: 70
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 25
    },
    {
        nome: 'Ana',
        idade: 32
    },
    {
        nome: 'Felipe',
        idade: 18
    },
]

// A função some verifica se um valor é true ou false (como se fosse o || 'ou' dos arrays)
const resultadoSome = lista.some((objeto) => objeto.idade > 50);

// Na função every todos as condições tem que ser true pra que ele retorne um true (como se fosse o && 'e' dos arrays)
const resultadoEvery = lista.every((objeto) => objeto.idade > 50); // todas as idades tem que ser > 50 pra que dê true

console.log("Função some é: " + resultadoSome);
console.log("Função every é: " + resultadoEvery);