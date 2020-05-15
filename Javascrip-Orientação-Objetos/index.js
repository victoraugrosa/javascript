import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233344;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.cliente = cliente1;

console.log("Saldo:",contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
console.log("Valor Depositado:", contaCorrenteRicardo._saldo);

console.log("Saldo:",contaCorrenteRicardo._saldo);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log("Valor Sacado:",valorSacado);
contaCorrenteRicardo.sacar(101);



console.log("Saldo: ", contaCorrenteRicardo._saldo);
console.log(cliente1, "\n" ,cliente2, "\n");
console.log(contaCorrenteRicardo);