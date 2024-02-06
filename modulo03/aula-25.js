const henrique = {
    idade: 30,
    peso: 60,
    nome: 'Henrique',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua qualquer',
    numero: 432,
    pais: 'Brasil',
    temFilhos: false,

}

const exibirInformacoes = (pessoa, qualInformacao) => {
    //console.log('Dados: ', pessoa);
    //console.log(`Peso do ${pessoa.nome}:`, pessoa.peso);
    //console.log(`Idade do ${pessoa.nome}:`, pessoa.idade);
    //console.log(`Endereço do ${pessoa.nome}:`, pessoa.endereco);
    console.log(`${qualInformacao} do ${pessoa.nome}:`, pessoa[qualInformacao]);
}

//exibirInformacoes(henrique);
//exibirInformacoes(henrique, 'pais');
//exibirInformacoes(henrique, 'numero');
exibirInformacoes(henrique, 'genero');