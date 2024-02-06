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

const funcaoReduce = (acc, objeto) => {
    /*const obj = {
        Jose: {
            idade: 13
        }
    }*/
    {
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

const pessoas = lista.reduce(funcaoReduce, {
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
console.log(pessoasArray);