alert("Bem-vindo!"); 
let total = 0;
let soma = 0;

let i = 50;
while(i <= 70){
 
 if( i%2 == 0){
  soma= soma + i;
document.body.innerHTML+=`<p>soma é:${soma}</p>`
  total = total + 1
 }
 i++
}

let media = soma / total
document.body.innerHTML+=`<p>soma é:${soma} media é:${media}</p>`
