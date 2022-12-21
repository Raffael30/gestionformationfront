import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.scss']
})
export class MotDePasseComponent implements OnInit {

  utilisateur!: Utilisateur;
  currentPassword!: string;
  newPassword!: string;
  confirmPassword!: string;

  constructor(private authentificationService: AuthentificationService, private utilisateurService: UtilisateurService, private route:Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.utilisateur = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
  }

  mergePassword() {
    this.authentificationService.authenticate(this.utilisateur.username, this.currentPassword).subscribe(response => {
      if(this.newPassword == this.confirmPassword) {
        this.utilisateur.password = this.newPassword;
        this.utilisateurService.mergePassword(this.utilisateur).subscribe(response => {  
          this.logout();
        })
      }

    })
  }

  logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("connexion");
  }
}


