import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { AuthenticateGuard } from './authenticate.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { GestionFormationComponent } from './components/formation/gestion-formation/gestion-formation.component';
import { GestionMessageComponent } from './components/message/gestion-message/gestion-message.component';
import { AjoutProspectComponent } from './components/prospect/ajout-prospect/ajout-prospect.component';

import { GestionProspectComponent } from './components/prospect/gestion-prospect/gestion-prospect.component';
import { GestionRendezvousComponent } from './components/rendezvous/gestion-rendezvous/gestion-rendezvous.component';
import { GestionUtilisateurComponent } from './components/utilisateur/gestion-utilisateur/gestion-utilisateur.component';

const routes : Route [] = [
  {path: '', component: AccueilComponent},
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'utilisateurs', component: GestionUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'utilisateurs/:nomRole', component: GestionUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'rendezvous', component: GestionRendezvousComponent, canActivate: [AuthenticateGuard]},
  {path: 'formations', component: GestionFormationComponent, canActivate:[AuthenticateGuard]},
  {path: 'messages', component:GestionMessageComponent, canActivate:[AuthenticateGuard]},
  {path: 'prospects', component: GestionProspectComponent},
  {path: 'ajoutProspect', component: AjoutProspectComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
