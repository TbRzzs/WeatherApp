import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AllWeather } from './models/wheater.models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private WeatherApi = 'https://api.weatherapi.com/v1/current.json?key=';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<AllWeather> {
    return this.http
      .get<AllWeather>(
        `${this.WeatherApi}${environment.weatherApiKey}&q=${city}`
      )
      .pipe(
        map((response: AllWeather) => ({
          location: {
            name: response.location.name,
            country: response.location.country,
            tz_id: response.location.tz_id,
            localtime: response.location.localtime,
          },
          current: {
            temp_c: response.current.temp_c,
            temp_f: response.current.temp_f,
            condition: {
              text: response.current.condition.text,
              icon: response.current.condition.icon,
            },
            wind_mph: response.current.wind_mph,
            wind_kph: response.current.wind_kph,
            humidity: response.current.humidity,
            feelslike_c: response.current.feelslike_c,
            feelslike_f: response.current.feelslike_f,
            cloud: response.current.cloud,
            uv: response.current.uv,
            gust_kph: response.current.gust_kph,
            gust_mph: response.current.gust_mph,
          },
        }))
      );
  }
}
