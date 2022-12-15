import { Rendezvous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export class Message {
    id!:number;
    objet!:string;
    utilisateur!:Utilisateur;
    rendezvous!:Rendezvous;
}
