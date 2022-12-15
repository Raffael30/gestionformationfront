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




  constructor(private prospectService: ProspectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.idProspect) {
      this.prospectService.getById(this.idProspect).subscribe(response => {
        this.prospect = response;
      })
    } else {
      this.prospect = new Prospect();
    }
  }


  getIdProspect(idProspect: number) {
    this.idProspect = idProspect;
  }






}
