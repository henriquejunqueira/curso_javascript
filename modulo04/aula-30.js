const lista = [
    {
        nome: 'Henrique',
        idade: 30,
    },
    {
        nome: 'Jose',
        idade: 13
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

/*const pessoa = {
    jose: {
        idade: 54,
    },
    joao: {
        idade: 65,
    },
    maria: {
        idade: 23,
    }
}

pessoa.jose.idade;*/

/*const funcaoReduce = (acc, objeto) => {
    /*const obj = {
        Jose: {
            idade: 13
        }
    }*/
    /*{
        return {
            ...acc,
            [objeto.nome]: {
                idade: objeto.idade
            }
        }
    }
}

/*const pessoas = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            //...objeto
            idade: objeto.idade
        }
    }
}, {});*/

/*const pessoas = lista.reduce(funcaoReduce, {
    Julio: {
        idade: 60
    }
});

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Henrique.idade);
console.log(pessoasArray);*/

/**** 

O método reduce() em JavaScript é uma função de array que permite reduzir os elementos de um array 
a um único valor. Ele executa uma função de callback para cada elemento do array, fornecendo um 
acumulador que mantém o resultado da operação até aquele ponto.

Aqui está um resumo passo a passo do reduce():

    Definição do Método:
        O método reduce() é chamado em um array.

    Callback Function:
        Você fornece uma função de callback como argumento para o método reduce().
        Esta função recebe dois argumentos: o acumulador e o elemento atual do array.
        O acumulador é o valor acumulado da operação até o momento atual.

    Valor Inicial do Acumulador:
        O método reduce() pode aceitar um argumento adicional opcional, que é o valor inicial do acumulador.
        Se não for fornecido, o primeiro elemento do array será usado como valor inicial do 
        acumulador e a iteração começará a partir do segundo elemento.

    Iteração:
        O reduce() percorre cada elemento do array, chamando a função de callback para cada elemento.

    Atualização do Acumulador:
        A função de callback pode realizar qualquer operação desejada com o acumulador e o elemento atual.
        O valor retornado pela função de callback se torna o novo valor do acumulador para a próxima iteração.

    Retorno do Resultado Final:
        Após percorrer todos os elementos do array, o reduce() retorna o valor final do acumulador.

******/

// EXEMPLO 1
/*const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(sum); */ // Output: 15

// EXEMPLO 2
const listaNomes = lista.reduce(function(acumulado, pessoa){
    return acumulado + `${pessoa.nome} tem ${pessoa.idade} anos\n`;
}, '');

console.log(listaNomes);
