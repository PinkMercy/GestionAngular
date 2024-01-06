import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPartComponent } from './public-part/public-part.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { FormationComponent } from './formation/formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicPartComponent,
    NavBarComponent,
    SignupComponent,
    FormationComponent,
    AccueilComponent,
    DetailFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
