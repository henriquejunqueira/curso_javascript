function primeiraFuncao(){
    console.log('executando primeira função');
    //console.log(arguments);
}

const segundaFuncao = function(){
    console.log('executando segunda função');
    return 2;
}

const terceiraFuncao = () => console.log('executando a terceira função que é uma arrow function');

const quartaFuncao = function(funcao){
    console.log('executando quarta função');
    funcao();
}

primeiraFuncao(1, 2, 3, 4);
segundaFuncao();
terceiraFuncao();
const x = segundaFuncao();
console.log(x);
quartaFuncao(primeiraFuncao);