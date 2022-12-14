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

  formations!:Formation[]

  constructor(private formationService:FormationService) { }


  ngOnInit(): void {
    this.getAllFormation()
    this.formation=new Formation()
  }

  selectFormation(idFormation:number)
  {
    this.formationService.getById(idFormation).subscribe(response=>
      {
        this.formation=response;
      })
  }

  getAllFormation()
  {
    this.formationService.getAll().subscribe
    (response=>this.formations=response)
  }

  infor(f:NgForm)
  {
    this.formationService.merge(this.formation).subscribe
    (response=>{
      this.formation=new Formation()
      this.getAllFormation()
    })
    f.resetForm();
  }
}
