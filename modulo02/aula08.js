//const salario = 103.4;
const salario = '103.4';
//const salarioString = '103.4';
const salarioNumero = Number(salario);

//console.log('salario: ', salario.toFixed(2)); // toFixed() define o número de casas decimais
//console.log('salario: ', Number(salarioString).toFixed(2)); // Number() converte string em numérico

console.log('salario: ', salario); // string
console.log('salario numero: ', salarioNumero); // numérico (double)
console.log('salario: ', salarioNumero.toFixed(2)); // string formatada