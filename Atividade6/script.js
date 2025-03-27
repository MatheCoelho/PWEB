function calcularMedia() {
    let nome = prompt("Nome do aluno:");
    let nota1 = parseFloat(prompt("Nota 1:"));
    let nota2 = parseFloat(prompt("Nota 2:"));
    let nota3 = parseFloat(prompt("Nota 3:"));
    let nota4 = parseFloat(prompt("Nota 4:"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert(`${nome}, sua média é: ${media.toFixed(2)}`);

    if (media >= 7) {
        alert("Aprovado!");
    } else {
        alert("Recuperação.");
    }
}


function realizarOperacoes() {
    let num1 = parseFloat(prompt("Primeiro número:"));
    let num2 = parseFloat(prompt("Segundo número:"));

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    alert(`Resultados:
    Soma: ${soma}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao.toFixed(2)}
    Resto da divisão: ${resto}`);
}
