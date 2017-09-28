import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Weather } from '../../entity/weather/weather';


@Injectable()
export class WeatherService {
    //http://www.sojson.com/open/api/weather/json.shtml?city=南京
    private weatherUrl = "/proxy/open/api/weather/json.shtml?city=";

    constructor(private http: Http, private jsonp: Jsonp) {

    }

    // getWeather(city: string): Promise<Weather> {
    //     let headers: Headers = new Headers();
    //     headers.append('Accept', 'application/json');
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     let options = new RequestOptions({
    //         headers: headers
    //     });
    //     let url = this.weatherUrl + city;
    //     let result = this.http.get(url, options).toPromise()
    //         .then(response => response.json().data as Weather)
    //         .catch(this.handleError);
    //     return result;
    // }

    // getWeather(city: string): Promise<Weather> {
    //     let url = this.weatherUrl + city;
    //     let params1 = new URLSearchParams();
    //     //params.set('search', term); // the user's search value
    //     //params.set('action', 'opensearch');
    //     params1.set('format', 'json');
    //     //params1.set('callback', "ng_jsonp.__req0.finished");
    //     params1.set('callback', "JSONP_CALLBACK");

    //     let result = this.http.get(url, { search: params1 }).toPromise()
    //         .then(response => response.json().data as Weather)
    //         .catch(this.handleError);
    //     return result;
    // }

    getWeather(city: string): Promise<Weather> {
        let url = this.weatherUrl + city;
        let result = this.http.get(url).toPromise()
            .then(response => {
                console.log(response);
                let result = response.json() as Weather;
                console.log(result);
                return result;
            })
            .catch(this.handleError);
        return result;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}