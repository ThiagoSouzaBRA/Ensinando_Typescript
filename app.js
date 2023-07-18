"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
// var isBoolean: boolean = false;
// isBoolean = true;
// // isBoolean = "Oi" //Erro
// console.log(isBoolean)
// var isString: String = "Nenhum valor.";
// // isBoolean = true; //Erro
// isString = "Acima do limite" 
// console.log(isString)
// isString = `O valor é ${isBoolean}.`;
// console.log(isString)
// var isNumber: number = 50;
// isNumber =- 10
// isNumber =- 1.0
// isNumber =- .10
// console.log(isNumber)
// // isNumber = "Oi" //Erro
/*Exercício:
1) Crie um array com notas de um aluno;
2) Filtre esse array para retornar somente as notas maiores que 60;
3) Nesse mesmo array, informe em qual posição aparece a nota 70.
*/
var notaAluno = [];
for (var i = 0; i < 100; i++) {
    notaAluno[i] = (Math.floor(Math.random() * 100) + 50);
}
console.log(notaAluno[notaAluno.indexOf(70)]);
function somarNumeros(a, b) {
    return a + b;
}
console.log(somarNumeros(1, 2));
var listaCachorro = [];
listaCachorro.push(new cachorro_1.Cachorro("A"));
listaCachorro.push(new cachorro_1.Cachorro("B"));
listaCachorro.push(new cachorro_1.Cachorro("C"));
listaCachorro.map(function (n) { return n.latir(); });
listaCachorro.map(function (n) { return n.andar(); });
listaCachorro.map(function (n) { return n.parar(); });
