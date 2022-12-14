import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent implements OnInit{

  id!:number

  formations!:Formation[]

  formation!:Formation


constructor(private formationService:FormationService){}


  ngOnInit(): void {
    this.getAllformation();
    this.formation=new Formation();
  }

  getAllformation()
  {
    this.formationService.getAll().subscribe
    (response=>this.formations=response)
  }

  getById(id:number)
  {
    this.formationService.getById(id).subscribe
    (response=>this.formation=response)
  }

  delete(id:number)
  {
    this.formationService.delete(id).subscribe
    (response=>this.getAllformation())
  }

  merge(formation:Formation)
  {
    this.formationService.merge(formation).subscribe
    (response=>this.formation=response)
  }

  modifierFormation(id:number)
  {
    this.formationService.getById
  }
}
