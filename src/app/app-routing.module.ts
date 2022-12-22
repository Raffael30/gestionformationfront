import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { AuthenticateGuard } from './authenticate.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DetailFormationComponent } from './components/formation/detail-formation/detail-formation.component';
import { GestionFormationComponent } from './components/formation/gestion-formation/gestion-formation.component';
import { GestionMessageComponent } from './components/message/gestion-message/gestion-message.component';
import { GestionPaiementComponent } from './components/paiement/gestion-paiement/gestion-paiement.component';
import { GestionProfilComponent } from './components/profil/gestion-profil/gestion-profil.component';
import { AjoutProspectComponent } from './components/prospect/ajout-prospect/ajout-prospect.component';
import { GestionProspectComponent } from './components/prospect/gestion-prospect/gestion-prospect.component';
import { GestionRendezvousComponent } from './components/rendezvous/gestion-rendezvous/gestion-rendezvous.component';
import { GestionUtilisateurComponent } from './components/utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { VoirUtilisateurComponent } from './components/utilisateur/voir-utilisateur/voir-utilisateur.component';

const routes : Route [] = [
  {path: '', component: AccueilComponent},
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'utilisateur/:id', component: VoirUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'utilisateurs', component: GestionUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'utilisateurs/:nomRole', component: GestionUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'rendezvous', component: GestionRendezvousComponent, canActivate: [AuthenticateGuard]},
  {path: 'formations', component: GestionFormationComponent, canActivate:[AuthenticateGuard]},
  {path: 'formations/:id', component: DetailFormationComponent, canActivate:[AuthenticateGuard]},
  {path: 'messages', component: GestionMessageComponent, canActivate:[AuthenticateGuard]},
  {path: 'paiements', component: GestionPaiementComponent, canActivate:[AuthenticateGuard]},
  {path: 'prospects', component: GestionProspectComponent, canActivate:[AuthenticateGuard]},
  {path: 'ajoutProspect', component: AjoutProspectComponent, canActivate:[AuthenticateGuard]},
  {path: 'profil', component: GestionProfilComponent, canActivate:[AuthenticateGuard]},
  {path: 'profil/:item', component: GestionProfilComponent, canActivate:[AuthenticateGuard]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
