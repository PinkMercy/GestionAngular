import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
const routes: Routes = [
  { path: 'Formation', component: FormationComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'detail-formation/:id', component: DetailFormationComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
