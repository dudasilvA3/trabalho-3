alert("Bem-vindo!");


let i = 1;

do{
     
   if(i % 2 == 1){
      valor = i
      let fat = 1;
      while(valor > 0){
       fat= fat * valor
       valor--;
      }
     document.body.innerHTML+= `<p>fat é:${fat}</p>`    
   }
   
i++;
}while(i <= 10);
