
class Pessoa{
    nome;
    idade;
    filhos;

    
    
    quantosFilhos(){
        if(this.filhos){
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade, filhos){
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Henrique', 29);
const filho2 = new Pessoa('Maria', 19);
console.log('Filho 1 tem: ', filho1.quantosFilhos());

const pessoa = new Pessoa('José', 54, [filho1, filho2]);
//pessoa.filhos = [];

console.log("Quantos filhos? ", pessoa.quantosFilhos());

console.log(pessoa);