"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const d_1 = require("./d\u00E9");
class Gobelet {
    constructor(nb_des) {
        this._des = [];
        this._valeur = 0;
        for (let i = 0; i < nb_des; i++) {
            let de = new d_1.De();
            this._des.push(de);
        }
    }
    get valeur() {
        return this._valeur;
    }
    set valeur(value) {
        this._valeur = value;
    }
    get des() {
        return this._des;
    }
    set des(nDes) {
        this._des = nDes;
    }
    get_valeur() {
        this._valeur;
    }
    lancer() {
        let nouvelV = 0;
        this._des.forEach((de) => {
            de.lancer();
            nouvelV += de.get_valeur();
        });
        this._valeur = nouvelV;
    }
    afficher_score() {
        console.log("le score est de " + this._valeur);
    }
}
exports.Gobelet = Gobelet;
