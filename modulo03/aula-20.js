const idade = 12;

const exibirIdade = () => {
    const idade = 23;
    console.log('exibir idade: ', idade);
}

const exibirExibirIdade = () => {
    exibirIdade();
    console.log('exibir exibir idade: ', idade);
}

exibirExibirIdade();
