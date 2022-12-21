import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  username!: string;
  password!: string;
  connectedUser!: Utilisateur;
  messageErreur!: string;

  constructor(private authentificationService: AuthentificationService, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.messageErreur = '';
  }

  connexion() {
    this.authentificationService.authenticate(this.username, this.password).subscribe(response => {

      sessionStorage.setItem('token', "Bearer " + response.jwt);

      this.authentificationService.findByUsername(this.username).subscribe(response2 => {
        this.connectedUser = response2;
        sessionStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
        this.route.navigateByUrl("/profil");
      })

    },
      error => {
        this.messageErreur = "Erreur de connexion";
        this.route.navigateByUrl("connexion");
      });
  }

  logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("connexion");
  }


  infor(f: NgForm) {
    this.connexion();
  }
}