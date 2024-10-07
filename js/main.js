let distance = prompt("Quanti km vuoi percorrere?");

let running = true;
while (running)
{
    if (!isNaN(distance)){
        distance = Number(distance)
        if (distance > 0){
            const total = distance * 0.21;
            running =  false;
        }else{
            distance = prompt("Il numero di km deve essere maggiore di 0");
        };
    }else{
        distance = prompt("Non hai inserito un numero");
    }

}
console.log(distance)