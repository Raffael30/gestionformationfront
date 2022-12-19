import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { MessageService } from 'src/app/services/message.service';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajout-message',
  templateUrl: './ajout-message.component.html',
  styleUrls: ['./ajout-message.component.scss']
})
export class AjoutMessageComponent implements OnInit, OnChanges {

  message!: Message;
  messages!: Message[];

  idRendezvous!: number;
  idUtilisateur!: number;

  rendezvous!: Rendezvous;
  rendezvouss!: Rendezvous[];
  utilisateur!: Utilisateur;
  utilisateurs!: Utilisateur[];

  @Input() idMessage!: number;

  constructor(private messageService: MessageService, private rendezvousService: RendezvousService, private utilisateurService: UtilisateurService) { }


  ngOnInit(): void {

    this.idMessage = 0;
    this.idRendezvous = 0;
    this.idUtilisateur = 0;

    this.getAllRendezvouss();
    this.getAllUtilisateurs();
    this.message = new Message();
  }

  ngOnChanges(): void {
    if (this.idMessage) {
      this.messageService.getById(this.idMessage).subscribe(response => {
        this.message = response;
        this.idRendezvous = this.message.rendezvous.id;
        this.idUtilisateur = this.message.utilisateur.id;
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

  getMessage(idMessage: number){
    this.messageService.getById(idMessage).subscribe(response => {
      this.message = response;
  })
}


  getAllRendezvouss(){
    this.rendezvousService.getAll().subscribe(response => {
      this.rendezvouss = response;
    })
  }

  getAllUtilisateurs(){
    this.utilisateurService.getAll().subscribe(response => {
      this.utilisateurs = response;
    })
  }


  merge(){
    this.rendezvousService.getById(this.idRendezvous).subscribe(response => {
      this.message.rendezvous = response;
      this.utilisateurService.getById(this.idUtilisateur).subscribe(response => {
        this.rendezvous.utilisateur = response;
        this.messageService.merge(this.message).subscribe(
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
    }

  }

