import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.component.html',
  styleUrls: ['./gestion-prospect.component.scss']
})
export class GestionProspectComponent implements OnInit {

  prospect!: Prospect;

  idProspect!: number;

  getDataFromListProspect(idProspect: number) {
    this.idProspect = idProspect;
  }

  recupererIdProspect(idProspect:number){
    console.log("Je suis dans la methode " + idProspect);
    this.idProspect = idProspect;
  }



  constructor(private prospectService: ProspectService, private activatedRoute:ActivatedRoute) { }

  selectProspect(idProspect: number) {
    this.prospectService.getById(idProspect).subscribe(response => {
      this.prospect = response;
    })
  }




  ngOnInit(): void {

    if (this.idProspect) {
      console.log("Je suis dans ngOnInit valide " + this.idProspect);
      this.prospectService.getById(this.idProspect).subscribe(response => {
        this.prospect = response;
      })
    } else {
      this.prospect = new Prospect();
      console.log("Je suis dans ngOnInit non valide " + this.idProspect);
    }
    

  }

}
