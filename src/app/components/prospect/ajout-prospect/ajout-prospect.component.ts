import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class AjoutProspectComponent implements OnInit, OnChanges {

  prospect!: Prospect;
  regions!: Region[];
  idRegion!: number;

  @Input() idProspect!:number;

  constructor(private prospectService: ProspectService, private statutService: StatutService, private regionService: RegionService) { }

  ngOnInit(): void {
    this.idRegion = 0;
    this.prospect = new Prospect();
    this.getAllRegions();
  }

  ngOnChanges(): void {
    if (this.idProspect) {
      this.prospectService.getById(this.idProspect).subscribe(response => {
        this.prospect = response;
        this.idRegion = this.prospect.region.id;
      })
    }
  }

  merge() {
    this.statutService.getById(1).subscribe(
      response => {
        this.prospect.statut = response;
        this.prospect.date = new Date();
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
}
