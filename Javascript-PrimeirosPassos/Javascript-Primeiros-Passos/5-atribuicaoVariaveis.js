console.log("Trabalhando com atribuição de variáveis");

const idade = 22;
let nome = "Victor";
const sobrenome = "Rosa";

console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`); // use de crase ao invés de aspas para interpolar ${}

//nome = nome + sobrenome; //erro de adicionar novo valor a constante;

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

nome = nome + sobrenome;
console.log(nome);


