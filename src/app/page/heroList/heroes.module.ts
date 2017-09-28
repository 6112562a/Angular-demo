import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroDetailModule } from '../heroDetail';

@NgModule({
    declarations: [
        HeroesComponent,
        HeroSearchComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HeroDetailModule
    ],
    providers: [],
    exports: [HeroesComponent, HeroSearchComponent]
})
export class HeroesModule { }
