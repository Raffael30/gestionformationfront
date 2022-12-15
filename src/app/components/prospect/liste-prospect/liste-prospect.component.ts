import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-liste-prospect',
  templateUrl: './liste-prospect.component.html',
  styleUrls: ['./liste-prospect.component.scss']
})
export class ListeProspectComponent implements OnInit {

  prospects!: Prospect[];
  connectedUser!: Utilisateur;
  idProspect!: number;

  constructor(private prospectService: ProspectService, private route: Router) { }

  @Output() appelParent = new EventEmitter<number>()


  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
    this.getAllProspects();
  }



  getAllProspects() {
    this.prospectService.getAll().subscribe(
      response => this.prospects = response
    )
  }

  modificationProspect(idProspect: number) {
    this.appelParent.emit(idProspect);
  }

  delete(id: number) {
    this.prospectService.delete(id).subscribe(
      response => {
        this.getAllProspects();
      },
      error => {
        console.log(error.message)
      }
    )
  }





}
