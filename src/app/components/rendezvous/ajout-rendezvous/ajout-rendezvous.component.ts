import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Statut } from 'src/app/models/statut';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProspectService } from 'src/app/services/prospect.service';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { StatutService } from 'src/app/services/statut.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-rendezvous',
  templateUrl: './ajout-rendezvous.component.html',
  styleUrls: ['./ajout-rendezvous.component.scss']
})
export class AjoutRendezvousComponent implements OnInit, OnChanges {

  rendezvous!: Rendezvous;
  rendezvouss!: Rendezvous[];

  idProspect!: number;
  idStatut!: number;
  idUtilisateur!: number;

  statut!: Statut;
  statuts!: Statut[];
  prospect!: Prospect;
  prospects!: Prospect[];
  utilisateur!: Utilisateur;
  utilisateurs!: Utilisateur[];

  @Input() idRendezvous!: number;

  constructor(private utilisateurService: UtilisateurService, private prospectService: ProspectService, private rendezvousService: RendezvousService, private statutService: StatutService) { }

  ngOnInit(): void {

    this.idProspect = 0;
    this.idStatut = 0;
    this.idUtilisateur = 0;

    this.getAllStatutsByType();
    this.getAllProspects();
    this.getAllUtilisateurs();
    this.rendezvous = new Rendezvous();
  }

  ngOnChanges(): void {
    if (this.idRendezvous) {
      this.rendezvousService.getById(this.idRendezvous).subscribe(response => {
        this.rendezvous = response;
        this.idStatut = this.rendezvous.statut.id;
        this.idProspect = this.rendezvous.prospect.id;
        this.idUtilisateur = this.rendezvous.utilisateur.id;
      })
    }

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

  getAllStatutsByType() {
    this.statutService.getAllByType('rendezvous', 'general').subscribe(response => {
      this.statuts = response;
    })
  }


  getAllProspects() {
    this.prospectService.getAll().subscribe(response => {
      this.prospects = response;
    })
  }

  getAllUtilisateurs() {
    this.utilisateurService.getAll().subscribe(response => {
      this.utilisateurs = response;
    })
  }


  merge() {
    console.log(this.rendezvous.horaire)
    this.statutService.getById(this.idStatut).subscribe(response => {
      this.rendezvous.statut = response;
      this.prospectService.getById(this.idProspect).subscribe(response => {
        this.rendezvous.prospect = response;
        this.utilisateurService.getById(this.idUtilisateur).subscribe(response => {
          this.rendezvous.utilisateur = response;
          this.rendezvousService.merge(this.rendezvous).subscribe(
            response => {
              window.location.reload();
            },
            error => {
              console.log(error.message)
            }
          )
        })
      }
      )
    })

  }
}

