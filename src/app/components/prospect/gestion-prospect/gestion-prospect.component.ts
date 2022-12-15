import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.component.html',
  styleUrls: ['./gestion-prospect.component.scss']
})
export class GestionProspectComponent implements OnInit {

  idProspect!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getIdProspect(idProspect: number) {
    this.idProspect = idProspect;
  }

}
