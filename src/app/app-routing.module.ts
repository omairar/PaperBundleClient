import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchedResultsComponent } from './searched-results/searched-results.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { HomeComponent } from './home/home.component';
import { ShowAllDetailsComponent } from './show-all-details/show-all-details.component';
import { ShowFilteredDetailsComponent } from './show-filtered-details/show-filtered-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchedResults/:size', component:SearchedResultsComponent},
  {path: 'allResults', component:AllResultsComponent},
  {path: 'showDesFilter', component:ShowFilteredDetailsComponent},
  {path: 'showDesAll', component:ShowAllDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
