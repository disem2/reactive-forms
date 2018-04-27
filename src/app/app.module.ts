import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormModule} from './pages/forms-page';
import { FamilyHistoryModule } from './pages/family-history';
import {PageNotFoundComponent} from './pages/page-not-found';
import {HeaderComponent} from './common/header';
import {FooterComponent} from './common/footer';

import {ApiService} from './services/api.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {RoutingService} from './services/routing.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormModule,
    AppRoutingModule,
    FamilyHistoryModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [ApiService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
