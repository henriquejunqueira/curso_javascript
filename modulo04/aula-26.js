
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

const converterObjeto = (objeto) => {
    return {
        ...objeto, // exibe todos os dados do objeto
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}

//console.log(lista.map((objeto) => objeto.idade));
console.log(lista.map(converterObjeto));