const lista = [
    {
        nome: 'Henrique',
        idade: 30,
        cartoes: ['3244', '5435']
    },
    {
        nome: 'Jose',
        idade: 13,
        cartoes: ['3399', '9988']
    },
    {
        nome: 'Fernanda',
        idade: 70,
        cartoes: ['1234', '5678']
    },
    {
        nome: 'Joao',
        idade: 42,
        cartoes: ['7788', '9911']
    },
    {
        nome: 'Maria',
        idade: 25,
        cartoes: ['2233', '1122']
    },
    {
        nome: 'Ana',
        idade: 32,
        cartoes: ['1923', '1934']
    },
    {
        nome: 'Felipe',
        idade: 18,
        cartoes: ['9685', '4738']
    },
]

//const cartoes = lista.flatMap((cartao) => cartao.cartoes);

//console.log(cartoes);

/* 

O método flatMap() em JavaScript é uma combinação do método map() e do método flat(), e é usado para 
mapear cada elemento de um array para um novo array, aplicando uma função a cada elemento, e em seguida 
aplanar (flatten) o array resultante em um único nível. Isso significa que o flatMap() primeiro mapeia 
cada elemento usando uma função e, em seguida, achata os resultados em um único array.

Aqui está um exemplo simples para ilustrar como o flatMap() funciona:

*/

// EXEMPLO 1
/*const arr = [1, 2, 3];

// A função de mapeamento retorna um array para cada elemento multiplicando-o por 2
// O flatMap() mapeia cada elemento do array original e, em seguida, achata os resultados em um único array
const result = arr.flatMap(x => [x * 2]);

console.log(result);*/ // Output: [2, 4, 6]

// EXEMPLO 2
const listaPessoas = [
    {
        nome: "Raquel"
    },
    {
        nome: "Henrique"
    },
    {
        nome: "Cinthya"
    },
    {
        nome: "Cassiane"
    },
    {
        nome: "Miriã"
    },
    {
        nome: "Samuel"
    }
]

const pessoas = listaPessoas.flatMap((x) => x.nome);

console.log(pessoas);