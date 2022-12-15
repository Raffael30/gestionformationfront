import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Statut } from 'src/app/models/statut';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-rendezvous',
  templateUrl: './gestion-rendezvous.component.html',
  styleUrls: ['./gestion-rendezvous.component.scss']
})
export class GestionRendezvousComponent implements OnInit{

  rendezvous!: Rendezvous;
  rendezvouss!: Rendezvous[];
  idRendezvous!: number;
  utilisateur!: Utilisateur;
  idUtilisateur!: number;
  prospect!: Prospect;
  idProspect!: number;

  idStatut!: number;
  statut!: Statut;
  statuts!: Statut[];



  constructor(private utilisateurService: UtilisateurService, private rendezvousService: RendezvousService) { }

  ngOnInit(): void {

    this.idUtilisateur = 0;
    this.idProspect = 0;

    this.rendezvous = new Rendezvous();
    this.utilisateur = new Utilisateur();
  }

  selectUtilisateur(idUtilisateur: number) {
    this.utilisateurService.getById(idUtilisateur).subscribe(response => {
      this.utilisateur = response;
    })
  }

  selectRendezvous(idRendezvous: number) {
    this.rendezvousService.getById(idRendezvous).subscribe(response => {
      this.rendezvous = response;
    })
  }
 




  ajouter() {

    this.rendezvousService.merge(this.rendezvous).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        console.log(error.message)
      }
    )
  }

}
