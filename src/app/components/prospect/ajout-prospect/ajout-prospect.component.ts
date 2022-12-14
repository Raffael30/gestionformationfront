import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { Region } from 'src/app/models/region';
import { ProspectService } from 'src/app/services/prospect.service';
import { RegionService } from 'src/app/services/region.service';
import { StatutService } from 'src/app/services/statut.service';

@Component({
  selector: 'app-ajout-prospect',
  templateUrl: './ajout-prospect.component.html',
  styleUrls: ['./ajout-prospect.component.scss']
})
export class AjoutProspectComponent implements OnInit {

  prospect!: Prospect;
  region!: Region;
  regions!: Region[];
  idRegion!: number;

  constructor(private prospectService: ProspectService, private statutService: StatutService, private regionService: RegionService, private route: Router) { }

  addProspect() {
    this.statutService.getById(1).subscribe(
      response => {
        this.prospect.statut = response;
        this.regionService.getById(this.idRegion).subscribe(response => {
          this.prospect.region = response;
          this.prospectService.merge(this.prospect).subscribe(response => {
            window.location.reload();
          });
        }
          )
        
        
      });
  }

  getAllRegions() {
    this.regionService.getAll().subscribe(response =>
      this.regions = response
    );
  }


  ngOnInit(): void {
    this.idRegion = 0;
    this.prospect = new Prospect();
    this.getAllRegions();
  }

  infor(f: NgForm) {
    this.addProspect();
  }

}
