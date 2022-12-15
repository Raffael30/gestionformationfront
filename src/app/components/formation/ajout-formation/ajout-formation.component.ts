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

  formateurs!: Utilisateur[];
  idFormateur!: number;
  formation!: Formation;

  constructor(private utilisateurService: UtilisateurService, private formationService: FormationService) { }

  ngOnInit(): void {
    this.formation = new Formation();
    this.getAllFormateurs();
  }


  getAllFormateurs() {
    this.utilisateurService.getAllByNomRole("formateur").subscribe(
      response => this.formateurs = response
    )
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
