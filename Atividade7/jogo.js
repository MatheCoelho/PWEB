function jogar(escolhaUsuario) {
    let opcoes = ["Pedra", "Papel", "Tesoura"];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "Você escolheu: " + escolhaUsuario + "\n" +
                    "Computador escolheu: " + escolhaComputador + "\n";
    
    if (escolhaUsuario === escolhaComputador) {
        resultado += "Empate!";
    } else if (
        (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
        (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel") ||
        (escolhaUsuario === "Papel" && escolhaComputador === "Pedra")
    ) {
        resultado += "Você venceu!";
    } else {
        resultado += "Computador venceu!";
    }
    
    alert(resultado);
}

document.getElementById("pedra").addEventListener("click", () => jogar("Pedra"));
document.getElementById("papel").addEventListener("click", () => jogar("Papel"));
document.getElementById("tesoura").addEventListener("click", () => jogar("Tesoura"));
