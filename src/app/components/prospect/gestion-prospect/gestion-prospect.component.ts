import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.component.html',
  styleUrls: ['./gestion-prospect.component.scss']
})
export class GestionProspectComponent implements OnInit, OnChanges {

  idProspect!: number;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnChanges(): void {

  }

  ngOnInit(): void {

  }

  getIdProspect(idProspect: number) {
    this.idProspect = idProspect;
  }

}
