class Usuario{
    email;
    senha;
    nome;

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    // Extendendo a classe Usuario, não é necessário criar as propriedades comentadas abaixo:
    // email;
    // senha;
    // nome;
    permissoes;

    constructor(email, senha, nome, permissoes){
        super(email, senha, nome); // Roda o construtor da classe que está sendo extendida, ou seja 'Usuario'
        // Por conta do super, não é necessário chamar as propriedades comentadas abaixo:
        // this.email = email;
        // this.senha = senha;
        // this.nome = nome;
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    // Extendendo a classe Usuario, não é necessário criar as propriedades comentadas abaixo:
    // email;
    // senha;
    // nome;
    compras;
}

const admin = new Administrador('email@email.com', 'senha', 'Henrique', [1, 6]);

const comprador = new Comprador();
comprador.senha = 'nova senha';

console.log(admin);
console.log(comprador);