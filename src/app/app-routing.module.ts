import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { AuthenticateGuard } from './authenticate.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { GestionFormationComponent } from './components/formation/gestion-formation/gestion-formation.component';
import { AjoutProspectComponent } from './components/prospect/ajout-prospect/ajout-prospect.component';
import { GestionUtilisateurComponent } from './components/utilisateur/gestion-utilisateur/gestion-utilisateur.component';

const routes : Route [] = [
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'utilisateurs', component: GestionUtilisateurComponent, canActivate: [AuthenticateGuard]},
  {path: 'formations', component: GestionFormationComponent},
  {path: 'ajoutProspect', component: AjoutProspectComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
