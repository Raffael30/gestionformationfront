import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent implements OnInit{

 
  idFormation!:number;
  formations!:Formation[];

  formation!:Formation;
  connectedUser!:Utilisateur;

 


  @Output() appelFormation= new EventEmitter<number>();

constructor(private formationService:FormationService,
  private utilisateurService:UtilisateurService){}


  ngOnInit(): void {
    this.getAllFormation();

    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    }
  }

  modificationFormation(idFormation:number)
    {
      this.idFormation=idFormation;
      this.appelFormation.emit(this.idFormation);
    } 

  getAllFormation()
  {
    this.formationService.getAll().subscribe
    (response=>this.formations=response)
  }

  delete(id:number)
  {
    this.formationService.delete(id).subscribe
    (response=>this.getAllFormation())
  }

 

  
}
