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

import { GestionRendezvousComponent } from './components/rendezvous/gestion-rendezvous/gestion-rendezvous.component';
import { ListeRendezvousComponent } from './components/rendezvous/liste-rendezvous/liste-rendezvous.component';
import { GestionProspectComponent } from './components/prospect/gestion-prospect/gestion-prospect.component';
import { GestionMessageComponent } from './components/message/gestion-message/gestion-message.component';
import { ListeMessageComponent } from './components/message/liste-message/liste-message.component';
import { AjoutMessageComponent } from './components/message/ajout-message/ajout-message.component';
import { AjoutUtilisateurComponent } from './components/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { AjoutRendezvousComponent } from './components/rendezvous/ajout-rendezvous/ajout-rendezvous.component';
import { GestionStatutComponent } from './components/statut/gestion-statut/gestion-statut.component';
import { AjoutFormationComponent } from './components/formation/ajout-formation/ajout-formation.component';
import { DetailFormationComponent } from './components/formation/detail-formation/detail-formation.component';
import { GestionProfilComponent } from './components/profil/gestion-profil/gestion-profil.component';
import { InformationsComponent } from './components/profil/informations/informations.component';
import { MotDePasseComponent } from './components/profil/mot-de-passe/mot-de-passe.component';
import { VoirUtilisateurComponent } from './components/utilisateur/voir-utilisateur/voir-utilisateur.component';
import { AjoutPaiementComponent } from './components/paiement/ajout-paiement/ajout-paiement.component';
import { GestionPaiementComponent } from './components/paiement/gestion-paiement/gestion-paiement.component';
import { ListePaiementComponent } from './components/paiement/liste-paiement/liste-paiement.component';
import { WelcomeComponent } from './components/profil/welcome/welcome.component';





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
    AccueilComponent,
    GestionProspectComponent,
    GestionRendezvousComponent,
    ListeRendezvousComponent,
    GestionMessageComponent,
    ListeMessageComponent,
    AjoutMessageComponent,
    AjoutUtilisateurComponent,
    AjoutRendezvousComponent,
    GestionStatutComponent,
    AjoutFormationComponent,
    DetailFormationComponent,
    GestionProfilComponent,
    InformationsComponent,
    MotDePasseComponent,
    VoirUtilisateurComponent,
    AjoutPaiementComponent,
    GestionPaiementComponent,
    ListePaiementComponent,
    WelcomeComponent
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
