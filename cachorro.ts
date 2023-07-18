export class Cachorro{
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