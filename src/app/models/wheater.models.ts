export interface AllWeather {
    location: Cities;
    current: Weather;
  }
  
  export interface Cities {
    name: string;
    country: string;
    tz_id: string;
    localtime: string;
  }
  
  export interface Weather {
    temp_c: number;
    temp_f: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    humidity: number;
    cloud: number; 
    feelslike_c: number;
    feelslike_f: number;
    uv: number; 
    gust_kph: number;
    gust_mph: number;

  }
  
  export interface Condition {
    text: string;
    icon: string;
  }
  