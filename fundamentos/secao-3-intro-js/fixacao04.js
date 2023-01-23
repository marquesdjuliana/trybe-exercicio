 const currentHour = 20;
 let message = "";

 if ( currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir");
 } else if ( currentHour >= 18 && currentHour < 22) {
    console.log("Rango da noite, vamos jantar :D");
 } else if ( currentHour >= 14 && currentHour < 18) {
    console.log((message = "Vamos fazer um bolo pro cadé da manhã"));
 } else if ( currentHour >- 11 && currentHour < 14) {
    console.log((message = "Hora do almoço"));
 } else {
    console.log((message = "Hmm, cherio de cadé recém-passado!"));
 }
