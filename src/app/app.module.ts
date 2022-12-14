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
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './services/interceptor.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './components/accueil/accueil.component';


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
    FooterComponent,
    AuthentificationComponent,
    AccueilComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
