alert("Bem-vindo!");
let i=0,somatorio=0;
while (i<15){
let valor = parseInt(prompt("Informe um valor:"));
let fatorial=1
 while(valor>0){

  fatorial= fatorial*valor
  valor--;
}
somatorio=somatorio+fatorial
i++
}
document.body.innerHTML+=(somatorio)
