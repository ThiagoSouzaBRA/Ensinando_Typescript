"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Cachorro = /** @class */ (function () {
    function Cachorro(nome) {
        this.nome = nome;
    }
    Cachorro.prototype.latir = function () {
        console.log("[".concat(this.nome, "] Au Au!"));
    };
    Cachorro.prototype.andar = function () {
        console.log("[".concat(this.nome, "] Andando..."));
    };
    Cachorro.prototype.parar = function () {
        console.log("[".concat(this.nome, "] Descansando!"));
    };
    Cachorro.prototype.getNome = function () {
        return this.nome;
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
