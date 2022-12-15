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

  utilisateurs!: Utilisateur[];
  utilisateur!: Utilisateur;
  roles!: Role[];
  role!: Role;
  idRole!: number;
  region!: Region;
  idRegion!: number;
  regions!: Region[];
  idUtilisateur!:number;

  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService, private regionService: RegionService) { }

  ngOnInit(): void {

    this.idRole = 0;
    this.idRegion = 0;
    
    this.utilisateur = new Utilisateur();
    this.getAllRegions();
    this.getAllRoles();
  }

  getUtilisateur(idUtilisateur:number)
  {
    this.utilisateurService.getById(idUtilisateur).subscribe(response=>
      {
        this.utilisateur=response;
      })
  }

  getAllRegions() {
    this.regionService.getAll().subscribe(response =>
      this.regions = response
    );
  }

  getAllRoles() {
    this.roleService.getAll().subscribe(response =>
      this.roles = response
    );
  }



  merge() {
    this.utilisateur.dateInscription = new Date;
    this.regionService.getById(this.idRegion).subscribe(
      response => {
        this.utilisateur.region = response;
        this.roleService.getById(this.idRole).subscribe(
          response => {
            this.utilisateur.role = response;
            this.utilisateurService.merge(this.utilisateur).subscribe(
              response => {
                console.log('ok')
                window.location.reload();
              },
              error => {
                console.log('non ok')
                console.log(error.message)
              }
            )
          }
        )
      }
    )
  }



}
