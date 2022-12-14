import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent implements OnInit {

  idUtilisateur!: number;
  idProspect!:number;
  nomRole!:string;
  titrePage!:string;
  affichageFormulaire!:boolean;
  affichageUtilisateurs!:boolean;
  affichageProspects!:boolean;

  constructor(private activatedRoute:ActivatedRoute, private route:Router) { 
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.nomRole = this.activatedRoute.snapshot.params['nomRole'];
    if (this.nomRole == undefined) {
      this.affichageFormulaire = true;
      this.affichageUtilisateurs = true;
      this.affichageProspects = false;
      this.nomRole = 'Utilisateur';
    } else {
      this.affichageFormulaire = false;
      this.affichageUtilisateurs = true;
    }
  }

  showUtilisateurs(){
    this.affichageUtilisateurs = true;
    this.affichageProspects = false;
  }

  showProspects(){
    this.affichageUtilisateurs = false;
    this.affichageProspects = true;
  }

  getIdUtilisateur(idUtilisateur: number) {
    this.idUtilisateur = idUtilisateur;
  }

  getIdProspect(idProspect: number) {
    this.idProspect = idProspect;
  }
}
