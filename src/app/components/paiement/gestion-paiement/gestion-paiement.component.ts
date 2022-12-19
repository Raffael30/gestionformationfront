import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { Statut } from 'src/app/models/statut';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { StatutService } from 'src/app/services/statut.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-paiement',
  templateUrl: './gestion-paiement.component.html',
  styleUrls: ['./gestion-paiement.component.scss']
})
export class GestionPaiementComponent implements OnInit {
  
  paiement!:Paiement;
  idPaiement!:number;

  formations!:Formation[];
  utilisateurs!:Utilisateur[];
  statuts!:Statut[];
  
  constructor(private paiementService:PaiementService,
    private formationService:FormationService, 
    private statutService:StatutService, 
    private utilisateurService:UtilisateurService){}
  
  ngOnInit(): void {
    this.paiement=new Paiement();
  }

  getIdPaiement(idPaiement:number)
  {
    this.idPaiement=idPaiement;
    this.paiementService.getById(this.idPaiement).subscribe
    (response=>this.paiement=response);
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

}
