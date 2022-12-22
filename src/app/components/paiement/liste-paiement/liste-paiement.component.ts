import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-paiement',
  templateUrl: './liste-paiement.component.html',
  styleUrls: ['./liste-paiement.component.scss']
})
export class ListePaiementComponent implements OnInit {

  idFormation!: number;
  formations!: Formation[]
  idParticipant!: number;
  participants!: Utilisateur[];

  idPaiement!: number
  paiements!: Paiement[];
  paiement!: Paiement;
  connectedUser!: Utilisateur;

  @Output() appelGestionPaiement = new EventEmitter<number>();

  constructor(private paiementService: PaiementService, private utilisateurService: UtilisateurService, private formationService: FormationService) { }

  ngOnInit(): void {
    this.idFormation = 0;
    this.idParticipant = 0;
    this.getAllPaiements();
    this.getAllUtilisateurs();
    this.getAllFormations();
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
  }


  filter() {
    if(this.idFormation !=0 && this.idParticipant !=0) {
      this.getAllPaiementsByFormationAndUtilisateur(this.idFormation, this.idParticipant);
    } else if(this.idFormation != 0 && this.idParticipant == 0) {
      this.getAllPaiementsByFormation(this.idFormation);
    } else if(this.idFormation == 0 && this.idParticipant != 0){
      this.getAllPaiementsByUtilisateur(this.idParticipant);
    } else {
      this.getAllPaiements();
    }
  }


  getAllPaiements() {
    this.paiementService.getAll().subscribe (response => this.paiements = response);
  }

  getAllPaiementsByFormation(idFormation:number){
    this.paiementService.getByIdFormation(idFormation).subscribe (response => this.paiements = response);
  }

  getAllPaiementsByUtilisateur(idUtilisateur:number){
    this.paiementService.getByIdUtilisateur(idUtilisateur).subscribe (response => this.paiements = response);
  }

  getAllPaiementsByFormationAndUtilisateur(idFormation:number, idUtilisateur:number){
    this.paiementService.getByIdUtilisateurAndIdFormation(idFormation, idUtilisateur);
  }

  getAllUtilisateurs() {
    this.utilisateurService.getAllByNomRole('participant').subscribe(response => this.participants = response);
  }

  getAllFormations() {
    this.formationService.getAll().subscribe(response =>this.formations = response)
  }

  delete(id: number) {
    this.paiementService.delete(id).subscribe
      (response => this.getAllPaiements());
  }

  modificationPaiement(idPaiement: number) {
    this.idPaiement = idPaiement;
    this.appelGestionPaiement.emit(this.idPaiement);
  }

  voirPaiement(idPaiement: number) {

  }
}
