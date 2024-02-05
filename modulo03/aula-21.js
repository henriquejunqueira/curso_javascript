
/*const teste1 = (callback) => {
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
teste4();*/

/* RESUMO:

Uma função de callback é uma função que é passada como argumento para outra função e executada 
após a conclusão de uma operação assíncrona ou em resposta a algum evento. Ela permite que você 
controle o fluxo de execução do seu código de forma assíncrona.

- Uma função de callback é uma função que é passada como argumento para outra função.
- Ela é executada quando uma operação assíncrona é concluída ou quando ocorre um evento.
- É comumente usada para controlar o fluxo de execução em operações assíncronas.

RESUMINDO MAIS AINDA:
- Função de Callback: É passada como argumento para outra função e é executada quando uma operação 
assíncrona é concluída ou quando um evento ocorre.

*/

function fazerAlgo(callback) {
    console.log("Fazendo algo...");
    // Simulando uma operação assíncrona (por exemplo, uma requisição AJAX)
    setTimeout(function() {
        console.log("Operação assíncrona concluída.");
        callback(); // Chama a função de callback após a operação assíncrona
    }, 2000);
}

// Função de callback passada como argumento
function callback() {
    console.log("Callback executada!");
}

// Chamando a função e passando a função de callback como argumento
fazerAlgo(callback);
