
const teste1 = (callback) => {
    // executa após um determinado tempo de 600 mili segundos (menos de 1 segundo)
    setTimeout(() =>{
        console.log('teste 1');
    }, 200)
}

const teste2 = (callback) => {
    // executa após um determinado tempo de 1000 mili segundos (menos de 1 segundo)
    setTimeout(() =>{
        console.log('teste 2');
        callback();
    }, 600)
}

const teste3 = (callback) => {
    // executa após um determinado tempo de 300 mili segundos (menos de 1 segundo)
    setTimeout(() =>{
        console.log('teste 3');
    }, 300)
}

const teste4 = (callback) => {
    // executa após um determinado tempo de 10 mili segundo (menos de 1 segundo)
    setTimeout(() =>{
        console.log('teste 4');
    }, 1)
}

const funcaoCallBack = () => {
    console.log('Usuário foi salvo no BD');
}

teste1();
console.log('1 + 1 = ', 1+1);
teste2(funcaoCallBack);
teste3();
console.log('2 + 2 = ', 2+2);
teste4();