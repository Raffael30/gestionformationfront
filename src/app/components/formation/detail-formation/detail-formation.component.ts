import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss']
})
export class DetailFormationComponent implements OnInit{
  
  idFormation!:number;
  formation!:Formation;
  formations!:Formation[];

  connectedUser!:Utilisateur;

  idUtilisateur!:number;
  utilisateur!:Utilisateur;
  utilisateurs!:Utilisateur[];

  @Output() appelGestionFormation= new EventEmitter<number>();

  constructor(private formationService:FormationService, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {

    
    this.idFormation = this.activatedRoute.snapshot.params['id'];
    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    };

    if (this.idFormation) {
      this.getIdFormation(this.idFormation);
    }
  }

  getIdFormation(idFormation:number)
  {
    
    this.formationService.getById(idFormation).subscribe(response=>
      {
        this.formation=response;
      })
  }
  

  voirUtilisateur(idUtilisateur:number)
    {
      
    }

    delete(id:number)
  {
    
  }

  modificationUtilisateur(idUtilisateur:number)
    {
      this.idUtilisateur=idUtilisateur;
      this.appelGestionFormation.emit(this.idUtilisateur);
    } 
}
