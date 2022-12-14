import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['../../app.component.scss','./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  connectedUser!:Utilisateur;

  constructor(private route:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "") ;
    }
  }

  logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("connexion");
  }

  
}
