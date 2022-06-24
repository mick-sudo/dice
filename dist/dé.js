"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    constructor() {
        this._valeur = 0;
        this._valeur = 0;
    }
    get valeur() {
        return this._valeur;
    }
    set valeur(value) {
        this._valeur = value;
    }
    lancer() {
        this.valeur = Math.ceil(Math.random() * 6);
    }
    get_valeur() {
        return this._valeur;
    }
}
exports.De = De;
