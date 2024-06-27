alert("Bem-vindo!");
let i=0, somatorio=0;
while(i<10){
let valor=parseInt(prompt("informe um valor:"));

  somatorio=somatorio+valor
 i++
}
media=somatorio/10
document.body.innerHTML+=`somatorio:${somatorio} e media:${media}`
