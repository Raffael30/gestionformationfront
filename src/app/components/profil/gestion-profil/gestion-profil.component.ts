import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.scss']
})
export class GestionProfilComponent implements OnInit {

  item= 'mesInformations';

  constructor(private activatedRoute:ActivatedRoute, private route:Router) { 
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.params['item'];
    if (this.item == undefined) {
      this.item = 'welcome';
    }
  }

}
