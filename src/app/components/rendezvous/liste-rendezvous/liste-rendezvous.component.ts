import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rendezvous } from 'src/app/models/rendezvous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RendezvousService } from 'src/app/services/rendezvous.service';

@Component({
  selector: 'app-liste-rendezvous',
  templateUrl: './liste-rendezvous.component.html',
  styleUrls: ['./liste-rendezvous.component.scss']
})
export class ListeRendezvousComponent implements OnInit {

  
  utilisateurs!: Utilisateur[];
  utilisateur!: Utilisateur;
  connectedUser!: Utilisateur;
  idUtilisateur!:number;
  idRendezvous!: number;
  rendezvousSelected!: Rendezvous;
  rendezvous!:Rendezvous;
  rendezvouss!:Rendezvous[];

  constructor(private rendezvousService: RendezvousService,
    private activatedRoute: ActivatedRoute) { }

    @Output() appelUtilisateur= new EventEmitter<number>();

    ngOnInit(): void {
  
      this.getAll();
      if(sessionStorage.getItem('connectedUser') != null) {
        this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
      }
  
    }
  
  
    getAll() {
      this.rendezvousService.getAll().subscribe(
        response => { this.rendezvouss = response }
      )
    }
  

  
  
  
  
    delete(id: number) {
      this.rendezvousService.supprimer(id).subscribe(
        response => {
          this.getAll();
        },
        error => {
          console.log(error.message)
        }
      )
    }
  
    modificationRendezvous(id: number) {
      this.rendezvousService.getById(id).subscribe(
        response => {
          this.rendezvous = response;
        },
        error => {
          console.log(error.message)
        }
      )
    }

}
