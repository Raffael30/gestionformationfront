import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.scss']
})
export class AjoutFormationComponent implements OnInit {
  
  formateurs!:Utilisateur[];
  formation!:Formation;

  constructor(private utilisateurService:UtilisateurService, private formationService:FormationService){}
  
  ngOnInit(): void {
    this.formation= new Formation();
  }


  getAllFormateurs(nomRole: string) {
    this.utilisateurService.getAllByNomRole(nomRole).subscribe(
      response => this.formateurs = response
    )
  }

  merge(formation:Formation)
  {
    this.formationService.merge(formation).subscribe
    (response=>this.formation=response)
  }
}
