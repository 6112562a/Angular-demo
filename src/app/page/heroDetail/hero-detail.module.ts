import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations: [
        HeroDetailComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    providers: [],
    exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
