import { Component, OnInit } from '@angular/core';
import { AllWeather } from './models/wheater.models';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Corrección del nombre del archivo a styleUrls
})
export class AppComponent implements OnInit {
  city: string = '';
  weatherByCity: AllWeather[] = [];
  farenheit: boolean = false;
  celsius: boolean = true;

  constructor(private servicios: ServiciosService) {}

  ngOnInit(): void {
    if (this.city === '') {
      this.city = 'Lima';
    }
    this.getWeatherByCity(this.city);
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
    if (this.city.length >= 3) {
      this.getWeatherByCity(this.city);
    }
  }
}
