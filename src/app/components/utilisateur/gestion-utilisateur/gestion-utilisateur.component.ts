import { Component } from '@angular/core';
import { Region } from 'src/app/models/region';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RegionService } from 'src/app/services/region.service';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent {

  utilisateurs!:Utilisateur[];
  utilisateur!:Utilisateur;
  roles!:Role[];
  role!:Role;
  idRole!:number;
  region!:Region;

  constructor(private utilisateurService:UtilisateurService, private roleService:RoleService, private regionService:RegionService)
  {}

  ngOnInit(): void {
    
    this.utilisateur= new Utilisateur();
    this.getAllUtilisateurs();
  }

  getAllUtilisateurs()
  {
    this.utilisateurService.getAll().subscribe(
      response=>this.utilisateurs=response
    )
  }


  ajouter()
  {
    

        this.utilisateurService.ajouter(this.utilisateur).subscribe(
          response=>
          {
            this.getAllUtilisateurs();
          },
          error=>
          {
            console.log(error.message)
          }
        )

  }

  supprimer(id:number)
  {
    this.utilisateurService.supprimer(id).subscribe(
      response=>
      {
        this.getAllUtilisateurs();
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
