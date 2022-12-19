import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';


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

 


  @Output() appelGestionFormation= new EventEmitter<number>();

constructor(private formationService:FormationService){}


  ngOnInit(): void {
    this.getAllFormation();

    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    }
  }

  modificationFormation(idFormation:number)
    {
      this.idFormation=idFormation;
      this.appelGestionFormation.emit(this.idFormation);
    } 

    voirFormation(idFormation:number)
    {
      
    }

  getAllFormation()
  {
    this.formationService.getAll().subscribe
    (response=>this.formations=response);
  }

  delete(id:number)
  {
    this.formationService.delete(id).subscribe
    (response=>this.getAllFormation());
  }

 

  
}
