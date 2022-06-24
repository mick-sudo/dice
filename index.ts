import { De } from "./dé";
import { Gobelet } from "./gobelet";

const de = new De();
de.lancer();
console.log(de.get_valeur());
de.lancer();
console.log(de.get_valeur());

const gobelet = new Gobelet(3)
gobelet.lancer();
console.log(gobelet);
gobelet.afficher_score();







