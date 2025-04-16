function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
  
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      exibirResultado("Insira valores validos");
      return;
    }
  
    const imc = Math.round((peso / Math.pow(altura, 2)) * 100) / 100;
    const classificacao = classificarIMC(imc);
  
    exibirResultado(`Seu IMC eh ${imc} - ${classificacao}`);
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) return "Magreza)";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 40) return "Obesidade";
    return "Obesidade Grave";
  }
  
  function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
  }
  