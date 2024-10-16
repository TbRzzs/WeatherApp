import { Component, OnInit } from '@angular/core';
import { AllWeather } from './models/wheater.models';
import { ServiciosService } from './servicios.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  city: string = '';
  weatherByCity: AllWeather[] = [];
  farenheit: boolean = false;
  celsius: boolean = true;
  cityInput$: Subject<string> = new Subject<string>();

  constructor(private servicios: ServiciosService) {}

  ngOnInit(): void {
    if (this.city === '') {
      this.city = 'Bogota';
    }
    this.getWeatherByCity(this.city);

    this.cityInput$
      .pipe(debounceTime(600))  
      .subscribe((city) => {
        if (city.length >= 3) {
          this.getWeatherByCity(city);
        }
      });
  }

  getWeatherByCity(city: string): void {
    this.servicios.getWeatherByCity(city).subscribe({
      next: (data) => {
        this.weatherByCity = [data];
      },
      error: (err) => {
        console.error('Error fetching weather data:', err);
      },
    });
  }

  searchCity(): void {
    this.cityInput$.next(this.city);
  }
}
