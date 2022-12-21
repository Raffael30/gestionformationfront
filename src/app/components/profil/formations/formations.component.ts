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

  constructor(private formationService:FormationService){}

  ngOnInit(): void {
    this.getAllFormation();
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
  }

  getAllFormation()
  {
    this.formationService.getAll().subscribe
    (response=>this.formations=response);
  }

}
