import { Region } from "./region";
import { Statut } from "./statut";

export class Prospect {

    id!:number;
    nom!:string;
    prenom!:string;
    email!:string;
    telephone!:string;
    region!:Region;
    adresse!:string;
    statut!:Statut;   
}
