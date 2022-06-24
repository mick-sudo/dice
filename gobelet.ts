import { De } from "./dé";

export class Gobelet {

  private _valeur: number;
  private _des: De[] = [];

  constructor(nb_des: number) {
    this._valeur = 0;
    for (let i = 0; i < nb_des; i++) {
      let de = new De();
      this._des.push(de);
    }
  }

  get valeur(): number {
    return this._valeur
  }

  set valeur(value: number) {
    this._valeur = value;
  }

  get des(): De[] {
    return this._des
  }


  set des(nDes: De[]) {
    this._des = nDes;
  }


  get_valeur() {
    this._valeur
  }

  lancer() {
    let nouvelV = 0
    this._des.forEach((de) => {
      de.lancer();
      nouvelV += de.get_valeur();
    })
    this._valeur = nouvelV;
  }


  afficher_score() {
    console.log("le score est de " + this._valeur);

  }
}