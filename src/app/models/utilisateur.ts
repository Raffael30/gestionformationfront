import { Formation } from "./formation";
import { Region } from "./region";
import { Role } from "./role";

export class Utilisateur {

    id!:number;
    adresse!:string;
    email!:string;
    nom!:string;
    prenom!:string;
    telephone!:string;
    region!:Region;
    dateInscription!:Date;
    username!:string;
    password!:string;
    role!:Role;

    formation!:Formation[]
    
}
