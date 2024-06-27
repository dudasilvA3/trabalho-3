alert("Bem-vindo!"); 
  let dividendo = parseInt(prompt("Informe um valor:"));
    let divisor = parseInt(prompt("Informe um valor:"));
 document.body.innerHTML += `${dividendo}/${divisor}=`
    if (divisor === 0) {
        document.body.innerHTML +=  "Erro: divisão por zero.";
    }

    let quociente = 0;

    // Utilizando do-while
    do {
        dividendo -= divisor; // Subtrai o divisor do dividendo
        quociente++; // Incrementa o quociente

    } while (dividendo >= divisor);

    document.body.innerHTML += `${quociente}`;
