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
const filtrarPessoa = (pessoa) => pessoa.nome === 'Ana';
const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista);

console.log(listaFiltrada);

