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

/**** 

O método Object.keys() é uma função que retorna um array contendo as chaves (ou nomes das propriedades) 
de um objeto.

Aqui está uma explicação passo a passo do Object.keys():

    Definição do Método:
        O método Object.keys() é chamado em um objeto.

    Retorno de um Array:
        Ele retorna um array contendo todas as chaves do objeto.

    Propriedades Enumeráveis:
        O método retorna apenas as chaves que são enumeráveis. Em outras palavras, ele retorna apenas 
        as chaves que são próprias e diretas do objeto, não incluindo as chaves herdadas de protótipos.

    Iteração:
        Você pode usar o array retornado pelo Object.keys() para iterar sobre as chaves do objeto usando 
        métodos como forEach(), map() ou for...of.

    Uso Comum:
        O Object.keys() é frequentemente usado quando você precisa iterar sobre as propriedades de um 
        objeto ou quando precisa obter uma lista de todas as chaves de um objeto.

****/

// EXEMPLO 1

/*const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

const keys = Object.keys(person);
console.log(keys);*/ // Output: ['name', 'age', 'gender']

// EXEMPLO 2

/*const chavesPessoas = Object.keys(lista);
console.log(chavesPessoas);*/

// EXEMPLO 3
/*const listaPessoas = lista.reduce(function(acumulado, pessoaListada){
    /* O operador de espalhamento chamado de 'spread' (...) é usado duas vezes. Isso indica que estamos 
    "espalhando" (ou copiando) todas as propriedades dos objetos acumulado e pessoaListada para 
    um novo objeto. */
    /*return {...acumulado, ...pessoaListada};
}, {});
const chavesPessoas = Object.keys(listaPessoas);
console.log(chavesPessoas);*/

// ===================================

const funcaoReduce = (acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) => ({ 
    nome: chave, 
    idade: pessoas[chave].idade 
}));

//console.log(pessoas);

//console.log(chaves);

//console.log(Object.keys(lista[0]));

console.log(listaDeVolta);

/*

Analisando o código passo a passo:

1. Definição da Lista:
   - Definida uma lista de objetos, cada objeto representando uma pessoa com as propriedades 'nome', 
   'idade' e 'exibir' (opcional).

2. Definição da Função de Redução 'funcaoReduce':
   - Definida uma função de redução 'funcaoReduce' que será usada no método 'reduce()'.
   - Esta função recebe dois parâmetros: 'acc' que é o acumulador e 'objeto' que é o objeto atual do array.
   - No corpo da função, está sendo criado um novo objeto. Está sendo espalhada todas as propriedades do 
   acumulador '...acc' para garantir que as propriedades anteriores sejam preservadas. Em seguida, está sendo 
   criada uma nova propriedade no formato '[objeto.nome]', que contém um objeto com a propriedade 'idade'.

3. Uso do Método reduce():
   - Está sendo usado o método reduce()' na lista de objetos, fornecendo a função 'funcaoReduce' como argumento.
   - O segundo argumento do 'reduce()' é um objeto vazio '{}' que serve como o valor inicial do acumulador.

4. Obtenção das Chaves do Objeto Resultante:
   - Está sendo usado o método 'Object.keys()' para obter todas as chaves do objeto resultante da redução.
   - Isso é feito para que possa existir iteração sobre essas chaves na próxima etapa.

5. Mapeamento das Chaves para a Forma Original dos Objetos:
   - Está sendo usado o método 'map()' na lista de chaves obtidas anteriormente.
   - Para cada chave, está sendo retornado um objeto no formato '{ nome: chave, idade: pessoas[chave].idade }'.
   - Isso significa que está sendo mapeado cada chave para um objeto com as propriedades 'nome' (o nome da 
    pessoa) e 'idade' (a idade correspondente).

6. Impressão da Lista Final:
   - Está sendo imprimida a lista resultante no console.

Em resumo, este código está criando uma nova lista de objetos que contém apenas as propriedades 'nome' 
e 'idade' das pessoas, usando 'reduce()' para reduzir a lista original e 'map()' para formatar a lista 
final antes de imprimi-la.

*/
