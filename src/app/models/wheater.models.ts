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
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
  }
  
  export interface Condition {
    text: string;
    icon: string;
  }
  