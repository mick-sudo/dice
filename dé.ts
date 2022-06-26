export class De {

  //attribute
  private _valeur: number = 0;

  constructor() {
    this._valeur = 0;
  }

  //getter/setter
  get valeur(): number {
    return this._valeur
  }

  set valeur(value: number) {
    this._valeur = value;
  }

  //methods
  lancer() {
    this.valeur = Math.ceil(Math.random() * 6);
  }

  get_valeur(): number {
    return this._valeur;
  }

}