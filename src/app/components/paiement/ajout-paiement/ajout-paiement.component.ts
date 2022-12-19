import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { Statut } from 'src/app/models/statut';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { StatutService } from 'src/app/services/statut.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-paiement',
  templateUrl: './ajout-paiement.component.html',
  styleUrls: ['./ajout-paiement.component.scss']
})
export class AjoutPaiementComponent implements OnInit, OnChanges{
 
 formations!:Formation[];
 idFormation!:number;

 utilisateurs!:Utilisateur[];
 idUtilisateur!:number;

 statuts!:Statut[];
 idStatut!:number;

 montant!:Paiement;

 @Input() idPaiement!:number;
 
 constructor(private utilisateurService:UtilisateurService, 
  private formationService:FormationService,
  private statutService:StatutService,
  private paiementService:PaiementService) {}
  
  ngOnInit(): void {
    this.idFormation=0;
    this.idUtilisateur=0;
    this.idStatut=0;
    this.montant= new Paiement();
    this.getAllFormations();
    this.getAllStatut();
    this.getAllUtilisateurs();
  }


ngOnChanges(changes: SimpleChanges): void {
   if(this.idPaiement)
   {
    this.paiementService.getById(this.idPaiement).subscribe(response=>
      {
        this.montant=response;
        this.idPaiement=this.montant.utilisateur.id;
      })
   }
  }


  getAllFormations()
  {
    this.formationService.getAll().subscribe(response=>this.formations=response);
  }

  getAllUtilisateurs()
  {
    this.utilisateurService.getAllByNomRole("participant").subscribe(
      response=>this.utilisateurs=response
    );
  }

  getAllStatut()
  {
    this.statutService.getAllByType("general","paiement").subscribe
    (response=>this.statuts=response);
  }

  merge()
  {
    this.utilisateurService.getById(this.idUtilisateur).subscribe
    (response=>this.montant.utilisateur=response);
    this.paiementService.merge(this.montant).subscribe
    (
      response=>{
        this.montant=response;
        window.location.reload();
      }
    )
  }
}
