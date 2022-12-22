import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-voir-utilisateur',
  templateUrl: './voir-utilisateur.component.html',
  styleUrls: ['./voir-utilisateur.component.scss']
})
export class VoirUtilisateurComponent implements OnInit{

  idUtilisateur!:number;
 
  utilisateur!:Utilisateur;
  utilisateurs!:Utilisateur[];

  connectedUser!:Utilisateur;

  idFormation!:number;
  formation!:Formation;
  formations!:Formation[];

  @Output() appelGestionUtilisateur= new EventEmitter<number>();

  constructor(private utilisateurService:UtilisateurService, private formationService:FormationService, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {

    
    this.idUtilisateur = this.activatedRoute.snapshot.params['id'];
    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    };

    if (this.idUtilisateur) {
      this.getIdUtilisateur(this.idUtilisateur);
      this.getByUtilisateursId(this.idUtilisateur);
    }
  }

  getIdUtilisateur(idUtilisateur:number)
  {
    
    this.utilisateurService.getById(idUtilisateur).subscribe(response=>
      {
        this.utilisateur=response;
      })
  }
  
  getByUtilisateursId(id:number)
  {
    this.formationService.getByUtilisateursId(id).subscribe(response=>
      {
        this.formations=response;
      })
  }
}
