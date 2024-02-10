const lista = [
    {
        nome: 'Henrique',
        idade: 30
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

/*for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}*/

//lista.forEach((objeto) => console.log(objeto));


// Foreach com função anônima
/*let soma = 0;

lista.forEach((objeto) => {
    soma += objeto.idade
});

console.log('Soma: ', soma);*/

// Foreach com função
/*let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade;
}

lista.forEach(somaIdade);

console.log('Soma: ', soma);*/

/**** O método forEach() em JavaScript é uma função de array que permite percorrer cada elemento do array 
e executar uma função para cada elemento, semelhante a um loop.

Aqui está um resumo passo a passo do forEach():

- Definição do Método:
    - O método forEach() é chamado em um array.
- Callback Function:
    - Você fornece uma função de callback como argumento para o método forEach().
    - Essa função é executada para cada elemento do array.
- Iteração:
    - O forEach() percorre cada elemento do array original, chamando a função de callback para cada elemento.
- Operação:
    - A função de callback recebe o elemento atual como argumento.
    - Você pode realizar qualquer operação desejada com esse elemento.
- Não Retorna um Novo Array:
    - Ao contrário do map(), o forEach() não retorna um novo array. Ele apenas itera sobre os elementos 
    do array original.
- Modificações no Array Original:
    - Você pode modificar o array original dentro da função de callback, se desejar.  */

// EXEMPLO 1:
/*const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
}); */

lista.forEach(function(listaNomes){
    console.log(listaNomes);
});