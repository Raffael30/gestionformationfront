import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.scss']
})
export class ListeMessageComponent implements OnInit {


  connectedUser!: Utilisateur;
  idRendezvous!: number;
  idMessage!: number;
  messageSelected!: Message;
  message!: Message;
  messages!: Message[];

  constructor(private messageService: MessageService,
    private activatedRoute: ActivatedRoute) { }

    @Output() appelGestionMessage = new EventEmitter<number>()

    ngOnInit(): void {
  
      this.getAll();
      if(sessionStorage.getItem('connectedUser') != null) {
        this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
      }
  
    }
  
  
    getAll() {
      this.messageService.getAll().subscribe(
        response => { this.messages = response }
      )
    }
  

  
  
  
  
    delete(id: number) {
      this.messageService.delete(id).subscribe(
        response => {
          this.getAll();
        },
        error => {
          console.log(error.message)
        }
      )
    }
  
    modificationMessage(idMessage: number) {
      this.appelGestionMessage.emit(idMessage);
    }

}
