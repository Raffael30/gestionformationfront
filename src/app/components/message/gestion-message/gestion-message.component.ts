import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Prospect } from 'src/app/models/prospect';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { MessageService } from 'src/app/services/message.service';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-message',
  templateUrl: './gestion-message.component.html',
  styleUrls: ['./gestion-message.component.scss']
})
export class GestionMessageComponent implements OnInit {

  rendezvous!: Rendezvous;
  rendezvouss!: Rendezvous[];
  idRendezvous!: number;
  utilisateur!: Utilisateur;
  idUtilisateur!: number;
  prospect!: Prospect;
  idProspect!: number;

  idMessage!: number;
  message!: Message;
  messages!: Message[];



  constructor(private utilisateurService: UtilisateurService, private rendezvousService: RendezvousService, private messageService : MessageService) { }

  ngOnInit(): void {

    this.idUtilisateur = 0;
    this.idProspect = 0;
    this.idRendezvous = 0;

    this.rendezvous = new Rendezvous();
    this.utilisateur = new Utilisateur();
    this.prospect = new Prospect();
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

  getIdMessage(idMessage: number) {
    this.idMessage = idMessage;
  }
 




  merge() {

    this.messageService.merge(this.message).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        console.log(error.message)
      }
    )
  }


}
