function converter() {
  let entrada = document.getElementById("valor");
  let texto = document.getElementById("resultado");
  let opcao = document.getElementById("opcao");
  let calculoKilometro = entrada.value * 1.609;
  let calculoMilha = entrada.value / 1.609;
  //console.log(opcao);
  //console.log(texto);
  //console.log(entrada);

  if (entrada.value < 0) {
    alert("O valor tem que ser maior ou igual a 0");
  } else if (entrada.value == 1) {
    if (opcao.value == "kilometro") {
      texto.innerHTML = entrada.value + " milha é " + calculoKilometro + " kilometros";
      //console.log(texto.innerHTML);
    } else {
      texto.innerHTML = entrada.value + " kilometro é " + calculoMilha + " milhas";
      //console.log(texto.innerHTML);
    } 
  } else {
    if (opcao.value == "kilometro") {
      if(calculoKilometro == 1) {
        texto.innerHTML = entrada.value + " milhas são " + calculoKilometro + " kilometro";
        //console.log(texto.innerHTML);
      } else {
        texto.innerHTML = entrada.value + " milhas são " + calculoKilometro + " kilometros";
        //console.log(texto.innerHTML);
      }
    } else {
      if(calculoMilha == 1) {
        texto.innerHTML = entrada.value + " kilometros são " + calculoMilha + " milha";
        //console.log(texto.innerHTML);
      } else {
        texto.innerHTML = entrada.value + " kilometros são " + calculoMilha + " milhas";
        //console.log(texto.innerHTML);
      }
    }
  }
}