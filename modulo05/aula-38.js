// Object.defineProperties consegue declarar várias propriedades
// Object.defineProperty declara apenas uma propriedade

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true,
    configurable: false,
    enumerable: true,
    //enumerable: false,
})

class Usuario{
    // nome;
    // senha;
    // email;

    constructor(email, senha, nome){
        //this.email = email;
        //this.senha = senha;

        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),
            /*nome: {
                value: nome,
                writable: true,
                configurable: false,
                enumerable: true,
            },
            senha: {
                value: senha,
                writable: false,
                configurable: false,
                enumerable: true,
            },
            email: {
                value: email,
                writable: true,
                configurable: false,
                enumerable: true,
            }*/
        })

        // define a propriedade nome
        /*Object.defineProperty(this, 'nome', {
            value: nome, // valor que vai receber
            writable: true, // se estiver true dá pra fazer usuario.nome = 'novo nome', ou seja, dá pra alterar o valor recebido anteriormente
            //writable: false,
            configurable: false, // se estiver como true posso deletar o nome
            enumerable: true, // se estiver true, ele será exibido na saída
            //enumerable: false,
        });*/

    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');
usuario.nome = 'Novo nome';

console.log(usuario);