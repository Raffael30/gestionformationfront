import { Component } from '@angular/core';
import { Region } from 'src/app/models/region';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent {

  utilisateurs!:Utilisateur[];
  utilisateur!:Utilisateur;
  roles!:Role[];
  role!:Role;
  idRole!:number;
  region!:Region;

  constructor(private utilisateurService:UtilisateurService, private roleService:RoleService)
  {}

  ngOnInit(): void {
    
   this.utilisateur= new Utilisateur();
    this.getAll();
  }

  getAll()
  {
    this.utilisateurService.getAll().subscribe(
      response=>this.utilisateurs=response
    )
  }


  ajouter()
  {
    console.log('ajouter')

        this.utilisateurService.ajouter(this.utilisateur).subscribe(
          response=>
          {
            console.log('ok')
            this.getAll();
          },
          error=>
          {
            console.log(' non ok')
            console.log(error.message)
          }
        )

  }

  supprimer(id:number)
  {
    this.utilisateurService.supprimer(id).subscribe(
      response=>
      {
        this.getAll();
      },
      error=>
      {
        console.log(error.message)
      }
    )
  }

  modifier(id:number)
  {
    this.utilisateurService.getById(id).subscribe(
      response=>
      {
       this.utilisateur=response;
      },
      error=>
      {
        console.log(error.message)
      }
    )
  }

}
