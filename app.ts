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
let notaAluno:Array<number> = [];
for(let i = 0; i < 100; i++){
    notaAluno[i] = (Math.floor(Math.random() * 100) + 50);
}
console.log(notaAluno[notaAluno.indexOf(70)])

function somarNumeros(a:number, b:number) : number {
    return a+b;
}

console.log(somarNumeros(1,2))

class Cachorro{
    private nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    latir() : void {
        console.log(`[${this.nome}] Au Au!`)
    }

    andar() : void {
        console.log(`[${this.nome}] Andando...`)
    }

    parar() : void {
        console.log(`[${this.nome}] Descansando!`)
    }

    getNome(): string {
        return this.nome;
    }

}

var listaCachorro = []
listaCachorro.push(new Cachorro("A"));
listaCachorro.push(new Cachorro("B"));
listaCachorro.push(new Cachorro("C"));

listaCachorro.map(n => n.latir())
listaCachorro.map(n => n.andar())
listaCachorro.map(n => n.parar())