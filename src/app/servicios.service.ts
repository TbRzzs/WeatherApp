import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AllWeather } from './models/wheater.models';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private WeatherApi =
    'http://api.weatherapi.com/v1/current.json?key=4790417dc960440392f210034242702';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<AllWeather> {
    return this.http.get<AllWeather>(`${this.WeatherApi}&q=${city}`).pipe(
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
          humidity: response.current.humidity,
          feelslike_c: response.current.feelslike_c,
          feelslike_f: response.current.feelslike_f,
          windchill_c: response.current.windchill_c,
          windchill_f: response.current.windchill_f,
          heatindex_c: response.current.heatindex_c,
          heatindex_f: response.current.heatindex_f,
          dewpoint_c: response.current.dewpoint_c,
          dewpoint_f: response.current.dewpoint_f,
        },
      }))
    );
  }
}

