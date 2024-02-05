const sleep = async (ms) => {
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
    }, 1000)*/

    console.log('PASSOU ', 3 ** 3);
    console.log('PASSOU ', 4 ** 4);
    console.log('PASSOU ', 5 ** 5);
}

aguardar();