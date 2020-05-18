import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233344 );

const cliente2 = new Cliente("Alice", 88822233344);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

console.log("Saldo:",contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(500);
console.log("Valor Depositado:", contaCorrenteRicardo._saldo);

console.log("Saldo:",contaCorrenteRicardo._saldo);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log("Valor Sacado:",valorSacado);

console.log("Saldo: ", contaCorrenteRicardo._saldo);

contaCorrenteRicardo.cliente = cliente1;
const conta2 = new ContaCorrente(102, cliente1);

let valor = 200;

contaCorrenteRicardo.transferir(valor, conta2);

console.log("\nTeste associando cliente a conta: \n\n", contaCorrenteRicardo);
console.log("\n", conta2); // Por conta2 ser um objeto, é passada como referência e por isso consegue-se inserir 'cidade: São Paulo';


console.log("\n", cliente2.cpf);
//console.log("\n", valor); // valor não foi alterado pois está passando uma cópia da variável 'valor' no método 'transferir';
 
console.log("\n Número de Contas Corrente: " + ContaCorrente.numeroDeContas);