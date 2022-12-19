import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-voir-utilisateur',
  templateUrl: './voir-utilisateur.component.html',
  styleUrls: ['./voir-utilisateur.component.scss']
})
export class VoirUtilisateurComponent implements OnInit{

  idUtilisateur!:number;
  utilisateur!:Utilisateur;

  constructor(private activatedRoute:ActivatedRoute, private utilisateurService:UtilisateurService) {}

  ngOnInit(): void {
    this.idUtilisateur = this.activatedRoute.snapshot.params['idUtilisateur'];
  }

}
