/*const fatorial = (valor) => {

    if(valor === 0 || valor === 1){
        return 1;
    }

    return valor * fatorial(valor - 1);
}

//console.log(fatorial(21));
console.log(fatorial(100));*/

/*
    RESUMO

    Uma função recursiva é uma função que chama a si mesma durante a sua execução. Ela é útil 
    para resolver problemas que podem ser decompostos em subproblemas semelhantes.

    - Uma função recursiva é uma função que se chama a si mesma durante a execução.
    - É útil para resolver problemas que podem ser decompostos em subproblemas semelhantes.
    - Geralmente, envolve um caso base (condição de parada) e uma chamada recursiva.

    RESUMINDO MAIS AINDA:

    - Função Recursiva: É uma função que chama a si mesma durante a execução. É útil para resolver 
    problemas que podem ser divididos em subproblemas semelhantes. Em uma função recursiva, há um 
    caso base que determina quando a recursão deve parar, evitando que a função se chame 
    indefinidamente.

*/

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Chamada recursiva para calcular o fatorial de (n - 1)
        return n * fatorial(n - 1); // Está chamando ela mesma nessa linha
    }
}

// Exemplo de uso da função recursiva
console.log(fatorial(4)); // Saída: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

