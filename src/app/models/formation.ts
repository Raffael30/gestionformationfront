import { Paiement } from "./paiement"
import { Utilisateur } from "./utilisateur"

export class Formation {

    id!:number
    nom!:string
    lieu!:string
    prix!:number
    dateDebut!:Date
    dateFin!:Date

    utilisateurs!:Utilisateur[]
    paiements!:Paiement[]
    

}
