const lista = [
    {
        nome: 'Henrique',
        idade: 30,
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

// Find mostra o primeiro objeto encontrado no array com as informações solicitadas, nesse caso com idade maior que 28
//const novaPessoa = lista.find((pessoa) => pessoa.idade > 28);
//const novaPessoa = lista.find((pessoa) => pessoa.nome === 'Joao');

/*const buscarPessoa = (pessoa) => pessoa.nome === 'Joao';

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);*/

/******

O método find() em JavaScript é uma função de array que permite encontrar o primeiro elemento que satisfaz 
uma condição especificada, retornando esse elemento ou undefined se nenhum elemento satisfazer a condição.

Aqui está um resumo passo a passo do find():

    Definição do Método:
        O método find() é chamado em um array.

    Callback Function:
        Você fornece uma função de callback como argumento para o método find().
        Essa função é executada para cada elemento do array.

    Condição de Busca:
        Dentro da função de callback, você define a condição que os elementos devem satisfazer para serem considerados.

    Iteração:
        O find() percorre cada elemento do array original, chamando a função de callback para cada elemento.

    Retorno do Primeiro Elemento:
        O find() retorna o primeiro elemento para o qual a função de callback retorna true.
        Se nenhum elemento satisfizer a condição, o método find() retorna undefined.

*******/

// EXEMPLO 1
/*const numbers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find(function(number) {
    return number > 25;
});

console.log(foundNumber); */ // Output: 30

// EXEMPLO 2
const listaPessoas = lista.find(function(listaPessoasProcuradas){
    return listaPessoasProcuradas; // O find só retorna a primeira evidência
})

console.log(listaPessoas);