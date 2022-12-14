import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/models/region';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RegionService } from 'src/app/services/region.service';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent {

  utilisateurs!: Utilisateur[];
  utilisateur!: Utilisateur;
  roles!: Role[];
  role!: Role;
  idRole!: number;
  idRegion!: number;
  nomRole!: string;

  constructor(private utilisateurService: UtilisateurService,
    private roleService: RoleService,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.utilisateur = new Utilisateur();
    this.nomRole = this.activatedRoute.snapshot.params['nomRole'];
    if (this.nomRole) {
      this.getAllByNomRole(this.nomRole)
    }
    else {
      this.getAll();
    }




  }

  getAll() {
    this.utilisateurService.getAll().subscribe(
      response => this.utilisateurs = response
    )
  }

  getAllByNomRole(nomRole: string) {
    this.utilisateurService.getAllByNomRole(nomRole).subscribe(
      response => this.utilisateurs = response
    )
  }




  supprimer(id: number) {
    this.utilisateurService.supprimer(id).subscribe(
      response => {
        this.getAll();
      },
      error => {
        console.log(error.message)
      }
    )
  }

  modifier(id: number) {
    this.utilisateurService.getById(id).subscribe(
      response => {
        this.utilisateur = response;
      },
      error => {
        console.log(error.message)
      }
    )
  }

}
