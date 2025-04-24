function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
  
    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }
  
  var base = parseFloat(prompt("Digite a base do retângulo:"));
  var altura = parseFloat(prompt("Digite a altura do retângulo:"));
  
  var ret1 = new Retangulo(base, altura);
  alert("A área do retângulo é: " + ret1.calcularArea());

//

function Conta(nome, banco, numero, saldo) {
    this.nome = nome;
    this.banco = banco;
    this.numero = numero;
    this.saldo = saldo;
  
    this.getNome = function () { return this.nome; };
    this.setNome = function (valor) { this.nome = valor; };
  
    this.getBanco = function () { return this.banco; };
    this.setBanco = function (valor) { this.banco = valor; };
  
    this.getNumero = function () { return this.numero; };
    this.setNumero = function (valor) { this.numero = valor; };
  
    this.getSaldo = function () { return this.saldo; };
    this.setSaldo = function (valor) { this.saldo = valor; };
  }
  
  function Corrente(nome, banco, numero, saldo, saldoEspecial) {
    Conta.call(this, nome, banco, numero, saldo);
    this.saldoEspecial = saldoEspecial;
  
    this.getSaldoEspecial = function () { return this.saldoEspecial; };
    this.setSaldoEspecial = function (valor) { this.saldoEspecial = valor; };
  }
  Corrente.prototype = new Conta();
  
  function Poupanca(nome, banco, numero, saldo, juros, vencimento) {
    Conta.call(this, nome, banco, numero, saldo);
    this.juros = juros;
    this.vencimento = vencimento;
  
    this.getJuros = function () { return this.juros; };
    this.setJuros = function (valor) { this.juros = valor; };
  
    this.getVencimento = function () { return this.vencimento; };
    this.setVencimento = function (valor) { this.vencimento = valor; };
  }
  Poupanca.prototype = new Conta();
  
  var nome = prompt("Digite o nome:");
  var banco = prompt("Digite o banco:");
  var numero = prompt("Digite o número da conta:");
  var saldo = parseFloat(prompt("Digite o saldo:"));
  
  var saldoEspecial = parseFloat(prompt("Digite o saldo especial da conta corrente:"));
  var juros = parseFloat(prompt("Digite o juros da poupança:"));
  var vencimento = prompt("Digite a data de vencimento:");
  
  var contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
  var contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, vencimento);
  
  alert("Conta Corrente:\n" +
    "Nome: " + contaCorrente.getNome() + "\n" +
    "Banco: " + contaCorrente.getBanco() + "\n" +
    "Número: " + contaCorrente.getNumero() + "\n" +
    "Saldo: " + contaCorrente.getSaldo() + "\n" +
    "Saldo Especial: " + contaCorrente.getSaldoEspecial());
  
  alert("Conta Poupança:\n" +
    "Nome: " + contaPoupanca.getNome() + "\n" +
    "Banco: " + contaPoupanca.getBanco() + "\n" +
    "Número: " + contaPoupanca.getNumero() + "\n" +
    "Saldo: " + contaPoupanca.getSaldo() + "\n" +
    "Juros: " + contaPoupanca.getJuros() + "\n" +
    "Data de Vencimento: " + contaPoupanca.getVencimento());
  