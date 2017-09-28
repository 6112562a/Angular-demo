import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesModule } from '../heroList';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeroesModule
    ],
    declarations: [DashboardComponent],
    providers: []
})

export class DashboardModule {
}

