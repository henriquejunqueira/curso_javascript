process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
    try{
        console.log('soma: ', calcularSoma(Number(data)));
    }catch(error){
        console.log(error.message);
        process.stdin.pause();
    }

});

const calcularSoma = (n) => {
    if(n < 0 || n > 100){
        throw new Error('Valor inválido, programa será encerrado.')
    }

    if(n === 0){
        return 0;
    }

    return n + calcularSoma(n - 1);
}
