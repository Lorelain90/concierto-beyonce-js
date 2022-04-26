// Tu código va aquí: 

function Ticket(años){

    if (años < 14){
        console.log("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
    }

    else if (años >= 14 && <= 17){
        console.log("Puedes entrar, pero con un acompañante +18.")
    }
        
    else (años =<18){
        console.log("Adelante, y disfruta.")
    }
    
}


Ticket(0);
Ticket(8);
Ticket(12);
Ticket(14);
Ticket(17);
Ticket(18);
Ticket(35);
Ticket(99);