import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProspectService } from 'src/app/services/prospect.service';
import { TransfertService } from 'src/app/services/transfert.service';
import { AjoutProspectComponent } from '../ajout-prospect/ajout-prospect.component';

@Component({
  selector: 'app-liste-prospect',
  templateUrl: './liste-prospect.component.html',
  styleUrls: ['./liste-prospect.component.scss']
})
export class ListeProspectComponent implements OnInit {

  prospects!: Prospect[];
  connectedUser!: Utilisateur;
  idProspect!: number;

  constructor(private prospectService: ProspectService, private transfertService: TransfertService, private route: Router) { }

  @Output() appelParent = new EventEmitter<number>()

  getAll() {
    this.prospectService.getAll().subscribe(
      response => this.prospects = response
    )
  }

  modificationProspect(idProspect: number) {
    /*this.transfertService.setData(idProspect);
    console.log("Je suis dans liste " + this.transfertService.getData());*/
    //this.route.navigateByUrl(`/prospects/${idProspect}`);
    this.appelParent.emit(idProspect);
  }

  supprimer(id: number) {
    this.prospectService.delete(id).subscribe(
      response => {
        this.getAll();
      },
      error => {
        console.log(error.message)
      }
    )
  }


  ngOnInit(): void {
    if (sessionStorage.getItem('connectedUser') != null) {
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
    }
    this.getAll();
  }



}
