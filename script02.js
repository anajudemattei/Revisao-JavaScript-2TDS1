let quantidadedeIngressos = 2;
let batatasPromocao = 0;
let nome = "Ana Julia"

for (let i = 1; i <= quantidadedeIngressos; i++) {
    if(i % 3 === 0) {
        batatasPromocao++;
      }
}

console.log(" Olá " + nome + ", voce ganhou " + batatasPromocao + " batatas fritas grátis!");