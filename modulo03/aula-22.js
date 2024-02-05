/*const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('PASSOU ', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('resultado ', resultado);

    //await sleep(3000); // demora 1s para executar
    
    // Será o último a ser processado, pois espera passar 1000ms (1 segundo)
    /*await setTimeout(() => {
        console.log('PASSOU TIMEOUT');
    }, 1000)*//*

    console.log('PASSOU ', 3 ** 3);
    console.log('PASSOU ', 4 ** 4);
    console.log('PASSOU ', 5 ** 5);
}

aguardar();*/

/* RESUMO 

O async e o await são recursos introduzidos no ES8 (ECMAScript 2017) para facilitar o trabalho com 
código assíncrono, tornando-o mais legível e fácil de entender, especialmente em comparação com 
o uso de callbacks ou promessas.

async: Essa palavra-chave é usada para declarar que uma função retornará uma promessa. Isso permite 
que você use o await dentro dela.

await: Essa palavra-chave só pode ser usada dentro de funções marcadas como async. Ela pausa a 
execução da função async e espera que a promessa seja resolvida. Isso torna o código assíncrono 
mais parecido com código síncrono.

*/

// Função assíncrona que retorna uma promessa
async function exemploAsync() {
    console.log("Iniciando operação assíncrona...");
    // Simula uma operação assíncrona, como uma requisição à API
    let resultado = await operacaoAssincrona();
    console.log("Resultado da operação assíncrona:", resultado);
}

// Função simulando uma operação assíncrona que retorna uma promessa
function operacaoAssincrona() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resultado da operação");
        }, 2000);
    });
}

// Chamando a função async
exemploAsync();


