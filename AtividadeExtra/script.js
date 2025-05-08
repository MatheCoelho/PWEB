var alunos = [];
var mediaGeral = 0;

document.getElementById("formAluno").onsubmit = function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var ra = document.getElementById("ra").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (nome.trim() == "" || nome.split(" ").length < 2) {
        alert("Nome completo deve conter ao menos um nome e um sobrenome.");
        return;
    }

    if (ra.length != 5 || isNaN(ra)) {
        alert("RA deve ter 5 dígitos numéricos.");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    var mediaAluno = (nota1 + nota2 + nota3) / 3;
    var aluno = { nome: nome, ra: ra, media: mediaAluno };
    alunos.push(aluno);

    var listaAlunos = document.getElementById("listaAlunos");
    var item = document.createElement("li");
    item.textContent = nome + " - RA: " + ra + " - Média: " + mediaAluno.toFixed(2);
    listaAlunos.appendChild(item);

    mediaGeral = 0;
    for (var i = 0; i < alunos.length; i++) {
        mediaGeral += alunos[i].media;
    }
    mediaGeral = mediaGeral / alunos.length;

    document.getElementById("mediaGeral").textContent = mediaGeral.toFixed(2);

    document.getElementById("formAluno").reset();
};
