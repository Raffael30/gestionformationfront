import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.scss']
})
export class AjoutFormationComponent implements OnInit, OnChanges {

  formateurs!: Utilisateur[];
  idFormateur!: number;
  utilisateurs!:Utilisateur[];
  idUtilisateur!:number;
  formation!: Formation;


  @Input() idFormation!:number

  constructor(private utilisateurService: UtilisateurService, private formationService: FormationService) { }
  

  ngOnInit(): void {

    this.formation = new Formation();
    this.getAllUtilisateurs();
    this.getAllFormateurs();
  }

  ngOnChanges(): void {
    
    if(this.idFormation)
    {
      this.formationService.getById(this.idFormation).subscribe(response=>
        {
          this.formation= response;
          this.idFormateur=this.formation.formateur.id;
        })
    };
  }


  getAllFormateurs() {
    this.utilisateurService.getAllByNomRole("formateur").subscribe(
      response => this.formateurs = response
    );
  }

  getAllUtilisateurs() {
    this.utilisateurService.getAllByNomRole("participant").subscribe(
      response => this.utilisateurs = response
    );
  }

  merge() {
    this.utilisateurService.getById(this.idFormateur).subscribe(response => {
      this.formation.formateur = response;
      this.formationService.merge(this.formation).subscribe
        (response => {
          this.formation = response;
          window.location.reload();
        })
    })
  }

}
