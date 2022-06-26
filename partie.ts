import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

export class Partie {

  //attribute
  private _joueurs: Joueur[] = [];
  private _nb_tours: number = 0;
  private _gobelet: Gobelet = new Gobelet(0);

  constructor(nb_tours: number, nb_des: number) {
    this._nb_tours = nb_tours;
    let gobelet: Gobelet = new Gobelet(nb_des)
    this._gobelet = gobelet
  }
}