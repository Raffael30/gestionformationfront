import { Component, OnInit } from '@angular/core';

import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.scss']
})
export class GestionFormationComponent implements OnInit{
  
  formation!:Formation;

  idFormation!:number;

  formateurs!:Utilisateur[];
  utilisateurs!:Utilisateur[];

  constructor(private formationService:FormationService,private utilisateurService:UtilisateurService, private formateurService:UtilisateurService) { }


  ngOnInit(): void {
    this.formation=new Formation();
  }

  getIdFormation(idFormation:number)
  {
    this.idFormation=idFormation;
    this.formationService.getById(this.idFormation).subscribe(response=>
      {
        this.formation=response;
      })
  }

  getAllFormateurs(){
    this.formateurService.getAllByNomRole("formateur").subscribe(response=>
      this.formateurs=response);
  }

  getAllUtilisateurs()
  {
    this.utilisateurService.getAllByNomRole("participant").subscribe(response=>
      this.utilisateurs=response);
  }
}
