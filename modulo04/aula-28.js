const lista = [
    {
        nome: 'Henrique',
        idade: 30,
        exibir: true,
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

//const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20);
//const listaFiltrada = lista.filter((pessoa) => !!pessoa.exibir);

//const filtrarPessoa = (pessoa) => pessoa.idade > 28;
/*const filtrarPessoa = (pessoa) => pessoa.nome === 'Ana';
const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista);

console.log(listaFiltrada);*/

/****** 

O método filter() em JavaScript é uma função de array que permite filtrar elementos com base em uma 
condição fornecida, retornando um novo array contendo apenas os elementos que satisfazem essa condição.

Aqui está um resumo passo a passo do filter():

    Definição do Método:
        O método filter() é chamado em um array.

    Callback Function:
        Você fornece uma função de callback como argumento para o método filter().
        Essa função é executada para cada elemento do array.

    Condição de Filtragem:
        Dentro da função de callback, você define a condição que os elementos devem satisfazer para 
        serem incluídos no novo array retornado pelo filter().

    Iteração:
        O filter() percorre cada elemento do array original, chamando a função de callback para cada elemento.

    Inclusão no Novo Array:
        Se a função de callback retornar true para um elemento, esse elemento é incluído no novo array 
        retornado pelo filter().

    Não Modifica o Array Original:
        O array original não é alterado pelo filter(). Ele permanece inalterado.

*******/

// EXEMPLO 1
/*const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
*/

// EXEMPLO 2
const listaPessoas = lista.filter(function(listaPessoasFiltradas){
    return listaPessoasFiltradas;
});

console.log(listaPessoas);
