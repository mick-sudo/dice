import { De } from "./dé";
import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

// const de = new De();
// de.lancer();
// console.log(de.get_valeur());
// de.lancer();
// console.log(de.get_valeur());

const gobelet = new Gobelet(2)
// gobelet.lancer();
// console.log(gobelet);
// gobelet.afficher_score();
let joueur = new Joueur("mick");
//console.log(joueur.get_nom());
joueur.jouer(gobelet);
joueur.afficher_score();







