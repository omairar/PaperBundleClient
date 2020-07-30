import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchedResultsComponent } from './searched-results/searched-results.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { HomeComponent } from './home/home.component';
import { ShowAllDetailsComponent } from './show-all-details/show-all-details.component';
import { ShowFilteredDetailsComponent } from './show-filtered-details/show-filtered-details.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';

import {FirebaseGetService} from './services/firebase-get.service';
import {FirebaseFilterService} from './services/firebase-filter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchedResultsComponent,
    AllResultsComponent,
    HomeComponent,
    ShowAllDetailsComponent,
    ShowFilteredDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [FirebaseFilterService, FirebaseGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
