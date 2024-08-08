let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburger = [];

hamburger.push(paes[0]);
hamburger.push(molhos[0]);
hamburger.push(saladas[1]);
hamburger.push(carnes[1]);
hamburger.push(queijos[1]);

for (let i = 0; i < hamburger.length; i++) {
    if (hamburger[i] == hamburger[0] && hamburger[i] == paes[0]) {
        console.log ("Noooosa! Esse é dahora!");
    } 
        console.log(hamburger[i])
    
}
