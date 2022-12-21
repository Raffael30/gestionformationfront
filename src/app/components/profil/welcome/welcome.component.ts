import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  utilisateur!: Utilisateur
  password!: string;

  constructor(private utilisateurService: UtilisateurService, private route: Router, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.utilisateur = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
  }

  delete() {
    if (this.utilisateur.role.nom !== 'admin') {
      this.authentificationService.authenticate(this.utilisateur.username, this.password).subscribe(response => {
        this.utilisateurService.delete(this.utilisateur.id).subscribe(response => {
          sessionStorage.clear();
          this.route.navigateByUrl("/");
        })
      })
    } else {
      alert('Vous ne pouvez pas supprimer votre compte car vous êtes admin')
    }
  }
}
