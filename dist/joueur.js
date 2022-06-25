"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this._score = 0;
        this._nom = nom;
        this._score = 0;
    }
    get nom() {
        return this._nom;
    }
    set nom(nom) {
        this._nom + nom;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        this._score = score;
    }
    get_nom() {
        return this._nom;
    }
    get_score() {
        return this._score;
    }
    jouer(gob) {
        gob.lancer();
        let score = gob.get_valeur();
        this.score += score;
    }
    afficher_score() {
        console.log("le score de " + this._nom + " est de " + this._score);
    }
}
exports.Joueur = Joueur;
