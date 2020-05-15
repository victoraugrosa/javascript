console.log("Trabalhando com listas");
// const salvador = "Salvador";
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array (
    "Salvador",
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push('Curitiba') //adiciona ao fim da lista

console.log(listaDestinos);

listaDestinos.splice(1,1); //remover item da lista -> splice(posição, quantidade)
console.log(listaDestinos);