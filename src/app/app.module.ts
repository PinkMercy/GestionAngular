import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPartComponent } from './public-part/public-part.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { FormationComponent } from './formation/formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';

const routes: Routes = [
  { path: 'Formation', component: FormationComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
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
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
