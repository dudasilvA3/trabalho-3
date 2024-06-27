alert("Bem-vindo!"); 
let somatorio=0
let i=1
let anterior=1
  while(i<64){
somatorio = somatorio + anterior
anterior = anterior *2
i++
}
document.body.innerHTML+=`${somatorio}`
