import { Time } from "@angular/common";
import { Message } from "./message";
import { Prospect } from "./prospect";
import { Statut } from "./statut";
import { Utilisateur } from "./utilisateur";

export class Rendezvous {


    id!:number;
    commentaire!:string;
    horaire!:Date;
    statut!:Statut;
    prospect!:Prospect;
    utilisateur!:Utilisateur;
    message!:Message;
}
