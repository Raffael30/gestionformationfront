import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { Region } from 'src/app/models/region';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProspectService } from 'src/app/services/prospect.service';
import { RegionService } from 'src/app/services/region.service';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent implements OnInit, OnChanges{

  utilisateur!: Utilisateur;
  prospect!:Prospect;
  roles!: Role[];
  idRole!: number;
  idRegion!: number;
  regions!: Region[];
  voirMotDePasse!:boolean;
  createUser!:boolean;

  @Input() idUtilisateur!:number;
  @Input() idProspect!:number;

  constructor(private utilisateurService: UtilisateurService, private prospectService:ProspectService, private roleService: RoleService, private regionService: RegionService) { }

  ngOnInit(): void {
    this.idRole = 0;
    this.idRegion = 0;
    this.utilisateur = new Utilisateur();
    this.getAllRegions();
    this.getAllRoles();
    this.voirMotDePasse = true;
    this.createUser=true;
  }

  ngOnChanges(): void {
    if (this.idUtilisateur) {
      this.utilisateurService.getById(this.idUtilisateur).subscribe(response => {
        this.utilisateur = response;
        this.idRegion = this.utilisateur.region.id;
        this.idRole = this.utilisateur.role.id;
        this.voirMotDePasse = false;
        this.createUser = false;
      })
    }
    if (this.idProspect) {
      this.prospectService.getById(this.idProspect).subscribe(response => {
        this.prospect = response;
        this.utilisateur = new Utilisateur();
        this.utilisateur.adresse = this.prospect.adresse;
        this.utilisateur.email = this.prospect.email;
        this.utilisateur.nom = this.prospect.nom;
        this.utilisateur.prenom = this.prospect.prenom;
        this.utilisateur.telephone = this.prospect.telephone;
        this.idRegion = this.prospect.region.id;
        this.idRole = 5;
        this.voirMotDePasse = true;
        this.createUser=true;
      })

    }

  }
  
  reset(){
    window.location.reload();
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
            if(this.createUser) {
              this.utilisateurService.add(this.utilisateur).subscribe(
                response => {
                  console.log('ok')
                  window.location.reload();
                },
                error => {
                  console.log('non ok')
                  console.log(error.message)
                }
              )
            } else {
              this.utilisateurService.mergeInformations(this.utilisateur).subscribe(
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
          
          }
        )
      }
    )
  }
}
