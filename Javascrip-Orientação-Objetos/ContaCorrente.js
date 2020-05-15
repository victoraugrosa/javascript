export class ContaCorrente{
    agencia;
    cliente;

    // #saldo = 0 -> proposta variável private -> https://github.com/tc39/proposal-class-fields#private-fields
    _saldo; // boas práticas de js define que _ antes do atributo indica que é private ( mesmo conseguindo alterar)  
    
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
    }
}