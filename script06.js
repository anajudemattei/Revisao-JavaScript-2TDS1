let armas = ["Nome: Wall-E", "laser", "misseis", "arma de fogo", "super soco", "lamina", "escudo"];

let ataques = [];

ataques.push("Wall-E");
ataques.push(armas[5]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) { 
        console.log(`Nome do Robô: ${ataques[i]}`);
    } else {
        console.log(`Ataques: ${i}: ${ataques[i]}`);
    }
}

