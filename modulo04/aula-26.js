
/*const lista = [
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

/*const converterObjeto = (objeto) => {
    //return objeto.idade;
    return objeto.nome;
}*/

/*const converterObjeto = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}*/

/*const converterObjeto = (objeto) => {
    return {
        ...objeto, // exibe todos os dados do objeto
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}

//console.log(lista.map((objeto) => objeto.idade));
console.log(lista.map(converterObjeto));*/

/***  
 * Método MAP
 * O map()método de Arrayinstâncias cria um novo array preenchido com os resultados da chamada de uma 
função fornecida em cada elemento do array de chamada. 

***/

// EXEMPLO 1

/*const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]*/

// EXEMPLO 2
/*const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]*/

/***const numeros = [10, 20, 30, 40, 50];

const multipicaNumeros = numeros.map(function(numeros){
    return numeros * 5;
});

console.log(multipicaNumeros);***/

// EXPLICANDO O CÓDIGO
/*

1. const numeros = [10, 20, 30, 40, 50];
   - Aqui, está sendo criado um array chamado 'numeros' que contém os números 10, 20, 30, 40 e 50.

2. const multipicaNumeros = numeros.map(function(numeros){'
   - Está sendo chamado o método map() no array numeros.
   - Para cada elemento do array, está sendo definido uma função de callback que recebe um argumento 
   chamado numeros. Note que o nome do argumento é o mesmo do array original, mas isso é apenas uma 
   coincidência de nome e não afeta o funcionamento do código.

3. return numeros * 5;
   - Dentro da função de callback, está sendo multiplicado cada elemento do array numeros por 5.
   - O valor retornado por essa função é o resultado da multiplicação.

4. });
   - Aqui termina a definição da função de callback passada para o método map().

5. console.log(multipicaNumeros);
   - Finalmente, está sendo imprimido o novo array retornado pelo método map(), que contém os números 
   originais multiplicados por 5.

*/

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

const nomes = lista.map(function(nome){
    return nome;
});

console.log(nomes);