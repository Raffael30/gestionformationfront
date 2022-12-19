import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Statut } from 'src/app/models/statut';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { StatutService } from 'src/app/services/statut.service';
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



  constructor(private utilisateurService: UtilisateurService, private rendezvousService: RendezvousService, private statutService : StatutService) { }

  ngOnInit(): void {

    this.idUtilisateur = 0;
    this.idProspect = 0;
    this.idStatut = 0;

    this.getAllStatutsByType();
    this.rendezvous = new Rendezvous();
    this.utilisateur = new Utilisateur();
  }

  getUtilisateur(idUtilisateur: number) {
    this.utilisateurService.getById(idUtilisateur).subscribe(response => {
      this.utilisateur = response;
    })
  }

  getRendezvous(idRendezvous: number) {
    this.rendezvousService.getById(idRendezvous).subscribe(response => {
      this.rendezvous = response;
    })
  }

  getIdRendezvous(idRendezvous: number) {
    this.idRendezvous = idRendezvous;
  }

  getAllStatutsByType(){
    this.statutService.getAllByType('rendezvous', 'general').subscribe(response => {
      this.statuts = response;
    })
  }
 




  merge() {

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
