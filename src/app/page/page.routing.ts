import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeroesComponent } from './heroList';
// import { HeroDetailComponent } from './heroDetail';
// import { DashboardComponent } from './dashboard';
import { WeatherComponent } from './weather';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    }, 
    // {
    //     path: "heroes",
    //     component: HeroesComponent
    // }, 
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }, 
    // {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    // }, 
    {
        path: 'weather',
        component: WeatherComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }