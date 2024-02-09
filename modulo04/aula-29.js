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

const buscarPessoa = (pessoa) => pessoa.nome === 'Joao';

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);