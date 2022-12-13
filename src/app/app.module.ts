import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUtilisateurComponent } from './components/utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { ListeUtilisateurComponent } from './components/utilisateur/liste-utilisateur/liste-utilisateur.component';
import { GestionFormationComponent } from './components/formation/gestion-formation/gestion-formation.component';
import { ListeFormationComponent } from './components/formation/liste-formation/liste-formation.component';
import { ListeProspectComponent } from './components/prospect/liste-prospect/liste-prospect.component';
import { AjoutProspectComponent } from './components/prospect/ajout-prospect/ajout-prospect.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateurComponent,
    ListeUtilisateurComponent,
    GestionFormationComponent,
    ListeFormationComponent,
    ListeProspectComponent,
    AjoutProspectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
