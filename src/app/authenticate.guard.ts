import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Role } from './models/role';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {


  /*par défaut
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/


  connectedUser!: Utilisateur
  roles!: string[];
  valid!: boolean;

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //check some condition
    if (sessionStorage.getItem('connectedUser') == null) {

      this.route.navigateByUrl('connexion');
      return false;
    }
    else {
      this.valid = false;
      this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser') ?? "");
      if (route.data['roles']) {
        this.roles = route.data['roles'];
        for (let role of this.roles) {
          if (role == this.connectedUser.role.nom) {
            console.log('if');
            this.valid = true;
            break;

          }
        }
        if(this.valid){
          return true;
        } else {
          this.route.navigateByUrl('/profil');
          return false;
        }
      } else {
        return true;
      }

    }
  }


}
