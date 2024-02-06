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
let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade;
}

lista.forEach(somaIdade);

console.log('Soma: ', soma);