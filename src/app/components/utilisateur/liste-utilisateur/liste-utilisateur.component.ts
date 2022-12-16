import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit, OnChanges {


  utilisateurs!: Utilisateur[];
  utilisateur!: Utilisateur;
  connectedUser!: Utilisateur;
  nomRole!: string;
  utilisateurSelected!: Utilisateur;

  idRole!: number;
  idRegion!: number;
  idUtilisateur!: number;


  constructor(private utilisateurService: UtilisateurService, private activatedRoute: ActivatedRoute) { }


  @Output() appelGestionUtilisateur = new EventEmitter<number>()

  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
    this.utilisateur = new Utilisateur();
    this.nomRole = this.activatedRoute.snapshot.params['nomRole'];
    if (this.nomRole) {
      this.getAllByNomRole(this.nomRole)
    }
    else {
      this.getAll();
    }
  }

  ngOnChanges(): void {
    this.nomRole = this.activatedRoute.snapshot.params['nomRole'];
    if (this.nomRole) {
      this.getAllByNomRole(this.nomRole)
    }
    else {
      this.getAll();
    }
  }


  modificationUtilisateur(idUtilisateur: number) {
    this.appelGestionUtilisateur.emit(idUtilisateur);
  }

  getAll() {
    this.utilisateurService.getAll().subscribe(
      response => this.utilisateurs = response
    )
  }

  getAllByNomRole(nomRole: string) {
    this.utilisateurService.getAllByNomRole(nomRole).subscribe(
      response => this.utilisateurs = response
    )
  }

  delete(id: number) {
    this.utilisateurService.delete(id).subscribe(
      response => {
        this.getAll();
      },
      error => {
        console.log(error.message)
      }
    )
  }
}
