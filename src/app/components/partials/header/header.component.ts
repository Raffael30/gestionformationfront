import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  utilisateur!:Utilisateur;

  constructor(private route:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('utilisateur') != null) {
      this.utilisateur = JSON.parse(sessionStorage.getItem('utilisateur') ?? "") ;
    }
  }

  logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("connexion");
  }
}
