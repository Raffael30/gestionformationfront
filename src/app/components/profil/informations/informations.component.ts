import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { RegionService } from 'src/app/services/region.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  utilisateur!: Utilisateur;
  connectedUser!: Utilisateur;
  idRegion!: number;
  regions!: Region[];

  constructor(private regionService: RegionService, private utilisateurService: UtilisateurService, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.utilisateur = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
      this.idRegion = this.utilisateur.region.id;
    }
    this.getAllRegions();
  }

  getAllRegions() {
    this.regionService.getAll().subscribe(response =>
      this.regions = response
    );
  }

  merge() {
    this.regionService.getById(this.idRegion).subscribe(
      response => {
        this.utilisateur.region = response;
        this.utilisateurService.mergeInformations(this.utilisateur).subscribe(
          response => {
            this.authentificationService.findByUsername(this.utilisateur.username).subscribe(response => {
              this.connectedUser = response;
              sessionStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
              window.location.reload();
            })
          }
        )
      }
    )
  }

}
