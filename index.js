
let edad=16

if(edad < 14) {
    console.log ("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")

} if else(edad >= 14 && edad <= 17) {
    console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.")

} if else(edad > 17) {
    console.log ("Eres mayor de edad, puedes entrar.")
}
/*-----*/

function Ticket(años) {
    if(años < 14) {
        console.log ("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
    }

     if (años >= 14 && años <= 17) {
        console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.")
    } 
    if (años > 17) {
        console.log ("Adelante y disfruta.")
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