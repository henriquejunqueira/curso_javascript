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

// Ordena os nomes em ordem alfabetica. Foi usado o toUpperCase() para fazer os nomes começarem com maiúscula
// pois, na tabela ascii as letras maiúsculas vem antes das minúsculas
lista.sort((a, b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }

    if(a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }

    return 0;
});

console.log(lista);