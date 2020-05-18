import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; // atributo estático
    agencia;
    _cliente;

    
    // #saldo = 0 -> proposta variável private -> https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // boas práticas de js define que _ antes do atributo indica que é private ( mesmo conseguindo alterar)  
    
    set cliente (novoValor){//Acessor para mudar valor de atributos privados dos objetos;
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
        }
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        //conta.cidade = "São Paulo";
        //valor = 20;
    }
}