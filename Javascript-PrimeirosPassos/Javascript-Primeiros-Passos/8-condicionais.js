console.log("Trabalhando com condicionais");
const destino = "Curitiba";

const listaDestinos = new Array (
    "Salvador",
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis");
console.log(listaDestinos);

let contador = 0;

while(contador<3){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe");
        break;
    }else{
        console.log("Destino NÃO existe");
        break;
    }
    contador += 1;
}