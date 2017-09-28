import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PageRoutingModule } from './page/page.routing';


// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService } from './service/other/in-memory-data.service';

import { AppComponent } from './app.component';
import { WeatherModule } from './page/weather';
// import { HeroesModule } from './page/heroList';
// import { DashboardModule } from './page/dashboard';

// import { HeroService } from './service/hero';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    PageRoutingModule,
    // HeroesModule,
    // DashboardModule,
    WeatherModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    // HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
