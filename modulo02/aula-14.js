const mensagem1 = 'Olá mundo';
const mensagem2 = ' e olá vida';
const mensagem3 = 'abcd ABCD defg DEFG hijk HIJK';
const mensagem4 = 'abcd ABCD defg DEFGlhijk HIJK';

//console.log(mensagem1.length); // exibe o número de caracteres na string
//console.log(mensagem1.concat(mensagem2)); // concatena duas strings
//console.log(mensagem1 + mensagem2); // concatena duas strings
//console.log(mensagem3.substring(5)); // exibe à partir da posição indicada
//console.log(mensagem3.substring(5, 2)); // exibe à partir da posição inicial até a final indicada. Obs: Se o início for maior que o fim, os argumentos serão trocados: (4, 1) = (1, 4).
//console.log(mensagem4.split(' ')); // quebra a string em um array à partir do que for indicado ' ' está indicando à parti do espaço

//console.log(mensagem1.length);
//console.log(mensagem1.concat(mensagem2));
//console.log(mensagem1 + mensagem2);
//console.log('ES: ', `djfajdlfkja ${mensagem1} ${mensagem2}`);

//console.log('UP: ', mensagem2.toUpperCase());
//console.log('DOWN: ', mensagem2.toLowerCase());

//console.log('Quebrar em array', mensagem4.split(' '));

console.log('Replace: ', mensagem4.replace('defg', 'HENRIQUE'));