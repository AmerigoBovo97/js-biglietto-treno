let distance = prompt("Quanti km vuoi percorrere?");
let total
const price = 0.21
const discount18 = 0.2;
const discount65 = 0.4;

let running = true;
while (running)
{
    if (!isNaN(distance)){
        distance = Number(distance)
        if (distance > 0){
            total = distance * price;
            running =  false;
        }else{
            distance = prompt("Il numero di km deve essere maggiore di 0");
        };
    }else{
        distance = prompt("Non hai inserito un numero");
    }

};

let age = prompt("Quanti anni hai?");

running = true;
while (running)
{
    if (!isNaN(age)){
        age = Number(age)
        if (age >= 0 && age <= 150){
            running =  false;
        }else{
            age = prompt("Il numero di km deve essere compreso tra 0 e 150");
        };
    }else{
        age = prompt("Non hai inserito un numero");
    }

};


if (age < 18){
    total = (total - (total * discount18)).toFixed(2);
}else if(age > 65){
    total = (total - (total * discount65)).toFixed(2);
};

console.log(
    `
    l'importo totale dovuto è: ${total} euro
    `
);