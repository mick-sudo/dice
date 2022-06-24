export class De {
  private _valeur: number = 0;

  constructor() {
    this._valeur = 0;
  }

  get valeur(): number {
    return this._valeur
  }

  set valeur(value: number) {
    this._valeur = value;
  }

  lancer() {
    this.valeur = Math.ceil(Math.random() * 6);
  }

  get_valeur(): number {
    return this._valeur;
  }

}