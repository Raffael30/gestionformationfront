import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.scss']
})
export class GestionFormationComponent implements OnInit{
  
  formation!:Formation

  idFormation!:number

  constructor(private formationService:FormationService) { }


  ngOnInit(): void {
    this.formation=new Formation()
  }

  selectFormation()
  {
    this.formationService.getById(this.idFormation).subscribe(response=>
      {
        this.formation=response;
      })
  }


}
