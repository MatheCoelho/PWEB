var funcionario1 = new Object();

funcionario1.matricula = "123";
funcionario1.nome = "Joao";
funcionario1.funcao = "Mecanico";
alert(`Matricula: ${funcionario1.matricula} Nome: ${funcionario1.nome} Função: ${funcionario1.funcao}`);

//

var funcionario2 = {};

funcionario2.matricula = "234";
funcionario2["nome"] = "Jonas";
funcionario2["funcao"] = "Eletricista";
alert("Matricula: " + funcionario2.matricula + "Nome: " + funcionario2.nome + "Função: " + funcionario2.funcao);

//

var funcionario3 = {
    matricula: "345",
    nome: "mateus",
    funcao: "Eletromecanico",
};
alert(`funcionario3 matricula:${funcionario3.matricula} nome: ${funcionario3.nome} funcao: ${funcionario3.funcao}`);