let metaLivros = 6;

let livrosLidos = ["Textos Crueis Demais Para Serem Lidos Rapidamente", "Para Todos Garotos que já Amei", "Antes que Tudo Acabe", "Harry Potter"];

console.log("Seus livros lidos");
    for (let i = 0; i <livrosLidos.length; i++){
        console.log(`- ${livrosLidos[i]}`);
    }

    if (livrosLidos.length >= metaLivros){
        console.log("Parabéns! Você atingiu sua meta de leitura!");
    }else { console.log (`Você está progredindo! Faltam ${metaLivros - livrosLidos.length} livros para atingir sua meta.`);
}
