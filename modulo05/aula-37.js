class Usuario{
    email;
    senha;
    nome;

    validarSenha(email, senha){
        return email + senha === this.nome;
    }

    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario{
    permissoes;

    // Aqui fui utilizado polimorfismo
    validarSenha(email, senha){
        return email === this.email && senha === this.senha;
    }

    constructor(email, senha, nome, permissoes){
        super(email, senha, nome); 
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;
}

const admin = new Administrador('email@email.com', 'senha', 'Henrique', [1, 6]);

//const usuario = new Usuario('email', 'senha', 'nome');
const usuario = new Usuario('email@email.com', 'senha', 'nome');

const comprador = new Comprador();
comprador.senha = 'nova senha';

//console.log(usuario.validarSenha('email', 'senha'));
console.log(usuario.validarSenha('email@email.com', 'senha')); // aqui vai dar false porque a função 'validarSenha' na classe 'Usuario' valida de forma diferente da classe 'Administrador'
console.log(admin.validarSenha('email@email.com', 'senha')); // aqui vai dar true