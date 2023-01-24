const notaPessoaCandidata = 90;

if (notaPessoaCandidata >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadoas!");
} else if ( notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
    console.log("Você está na nosssa lista de espera.");
} else if ( notaPessoaCandidata < 60) {
    console.log("Infelizmente, você reprovou");
}