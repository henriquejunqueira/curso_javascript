const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true,
    configurable: false,
    enumerable: true,
})

class Usuario{

    constructor(email, senha, nome){

        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if(value.length < 4){
                        throw new TypeError('Precisa de pelo menos 4 letras');
                    }
                    senha = value;
                }
            },
            email: {
                get: () => email,
                set: (value) => email = value
            },
        })

    }

    getEmail(){
        return this.email;
    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');
//usuario.email = 'Novo email';
//usuario.senha = 'no';
usuario.senha = 'novasenhas';

//console.log(usuario.email);
//console.log(usuario.senha);
console.log(usuario.getEmail());