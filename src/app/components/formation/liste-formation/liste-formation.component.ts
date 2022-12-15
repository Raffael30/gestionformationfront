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

  id!:number;
  idFormation!:number;
  formations!:Formation[];

  formation!:Formation;
  connectedUser!:Utilisateur;
  utilisateur!:Utilisateur;
  utilisateurs!:Utilisateur[]
  nomRole!:string;


  @Output() appelFormation= new EventEmitter<number>();

constructor(private formationService:FormationService,
  private activatedRoute: ActivatedRoute,
  private utilisateurService:UtilisateurService){}


  ngOnInit(): void {
    this.getAllFormation();
    this.formation=new Formation();

    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    }
    this.utilisateur = new Utilisateur();
    this.nomRole = this.activatedRoute.snapshot.params['nomRole'];
    if (this.nomRole) {
      this.getAllByNomRole(this.nomRole)
    }
    else {
      this.getAllFormation();
    }
  }

  getAllByNomRole(nomRole: string) {
    this.utilisateurService.getAllByNomRole(nomRole).subscribe(
      response => this.utilisateurs = response
    )
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

  getById(id:number)
  {
    this.formationService.getById(id).subscribe
    (response=>this.formation=response)
  }

  delete(id:number)
  {
    this.formationService.delete(id).subscribe
    (response=>this.getAllFormation())
  }

  merge(formation:Formation)
  {
    this.formationService.merge(formation).subscribe
    (response=>this.formation=response)
  }

  modifierFormation(id:number)
  {
    this.formationService.getById
  }
}
