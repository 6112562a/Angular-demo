import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { WeatherComponent } from './weather.component';

import { WeatherService } from '../../service/weather';

@NgModule({
    declarations: [
        WeatherComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        JsonpModule,
        BrowserModule,
    ],
    providers: [WeatherService],
    exports: [WeatherComponent]
})
export class WeatherModule { }
