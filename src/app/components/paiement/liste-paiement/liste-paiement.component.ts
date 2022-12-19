import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paiement } from 'src/app/models/paiement';
import { Utilisateur } from 'src/app/models/utilisateur';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-liste-paiement',
  templateUrl: './liste-paiement.component.html',
  styleUrls: ['./liste-paiement.component.scss']
})
export class ListePaiementComponent implements OnInit{
  
  idPaiement!:number
  montants!:Paiement[];
  montant!:Paiement;
  connectedUser!:Utilisateur;
  
@Output() appelGestionPaiement=new EventEmitter<number>();

constructor(private paiementService:PaiementService){}


  ngOnInit(): void {
    this.getAllPaiement();

    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    }
  }

  getAllPaiement()
  {
this.paiementService.getAll().subscribe
(response=>this.montants=response);
  }

  delete(id:number)
  {
    this.paiementService.delete(id).subscribe
    (response=>this.getAllPaiement());
  }

  modificationPaiement(idPaiement:number)
  {
    this.idPaiement=idPaiement;
    this.appelGestionPaiement.emit(this.idPaiement);
  }

  voirPaiement(idPaiement:number)
  {
    
  }
}
