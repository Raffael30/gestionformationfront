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
  utilisateurs!: Utilisateur[];
  selectedUtilisateurs: Utilisateur[] = [];
  idUtilisateur: number[]=[];
  formation!: Formation;

  utilisateur!: Utilisateur;


  @Input() idFormation!: number

  constructor(private utilisateurService: UtilisateurService, private formationService: FormationService) { }


  ngOnInit(): void {

    
   // this.idUtilisateur=[4];
   console.log(this.formation);
   if(this.formation==undefined)
   {
    this.idFormateur = 0;
    this.formation = new Formation();
   }
    this.getAllUtilisateurs();
    this.getAllFormateurs();
  }

  ngOnChanges(): void {
    this.formation = new Formation();
    this.idUtilisateur=[];
    if (this.idFormation) {
      this.formationService.getById(this.idFormation).subscribe(response => {
        this.formation = response;
        this.idFormateur = this.formation.formateur.id;
       
        for(var u of this.formation.utilisateurs)
        {
          console.log(u.id);
          this.idUtilisateur.push(u.id);
        }
        console.log(this.idUtilisateur)
        this.ngOnInit();
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
      if (this.idUtilisateur!=null) {
        this.utilisateurService.getFromArray(this.idUtilisateur).subscribe(response2 => {

          this.formation.utilisateurs = response2

          this.formationService.merge(this.formation).subscribe
            (response => {
              this.formation = response;
              window.location.reload();
            })
        })
      }
      else
      {
        
        this.formationService.merge(this.formation).subscribe
            (response => {
              this.formation = response;
              window.location.reload();
            })
      }

    })
  }


}
