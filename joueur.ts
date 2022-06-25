import { Gobelet } from "./gobelet";

export class Joueur {
  private _nom: string;
  private _score: number = 0;

  constructor(nom: string) {
    this._nom = nom;
    this._score = 0;
  }

  get nom() {
    return this._nom;
  }

  set nom(nom: string) {
    this._nom + nom;
  }

  get score() {
    return this._score;
  }

  set score(score: number) {
    this._score = score
  }

  get_nom(): string {
    return this._nom
  }

  get_score(): number {
    return this._score
  }

  jouer(gob: Gobelet): void {
    gob.lancer();
    let score = gob.get_valeur();
    this.score += score;
  }

  afficher_score() {
    console.log("le score de " + this._nom + " est de " + this._score)

  }

}