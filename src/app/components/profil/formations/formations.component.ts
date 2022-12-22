import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations!:Formation[];
  connectedUser!: Utilisateur;

  today!:Date;


  constructor(private formationService:FormationService){}

  ngOnInit(): void {

    this.today = new Date();
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
    this.getAllFormation();

    this.getAllFormation();
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }

  }

  getAllFormation()
  {

    this.formationService.getByUtilisateursId(this.connectedUser.id).subscribe
    (response=>this.formations=response);
  }

}
