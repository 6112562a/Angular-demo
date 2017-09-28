import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";

import { Weather } from '../../entity/weather/weather';
import { WeatherService } from '../../service/weather';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})


export class WeatherComponent implements OnInit {
    constructor(private _weatherService: WeatherService,
        private router: Router) {
        this.cities = [];
        this.weathers = [];
    }

    title = 'The weathers';
    cities: string[];
    weathers: Weather[];
    selectedWeather: Weather;

    ngOnInit(): void {
        this.initCities();
        this.getWeather();
    }

    initCities() {
        this.cities = [];
        this.cities.push("南京");
        // this.cities.push("泰州");//3s调用间隔
        // this.cities.push("北京");
    }

    getWeather(): void {
        let tmpWeathers = [];
        this.cities.forEach(x => {
            this._weatherService.getWeather(x).then(weather => {
                console.log("weather");
                console.log(weather);
                if (weather)
                    tmpWeathers.push(weather)
            });
        });
        console.log("tmpWeathers");
        console.log(tmpWeathers);
        this.weathers = tmpWeathers;
    }
}
