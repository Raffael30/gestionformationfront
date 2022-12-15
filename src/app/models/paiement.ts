import { Formation } from "./formation";
import { Statut } from "./statut";
import { Utilisateur } from "./utilisateur";

export class Paiement {
    id!:number;
    montant!:number;
    statut!:Statut;
    formation!:Formation;
    utilisateur!:Utilisateur;
    

}
