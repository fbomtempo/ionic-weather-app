import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_KEY: string = environment.API_KEY;
  private readonly SEARCH_API: string = environment.SEARCH_API;
  private readonly API: string = environment.WEATHER_API;

  constructor(private http: HttpClient) { }

  search(location: string): Observable<any> {
    return this.http.get(`${this.SEARCH_API}q=${location}&limit=5&appid=${this.API_KEY}`);
  }

  weather(lat: number, lon: number): Observable<any>  {
    return this.http.get(`${this.API}weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric&lang=pt_br`);
  }

  oneCall(lat: number, lon: number): Observable<any>  {
    return this.http.get(`${this.API}onecall?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&exclude=hourly,alerts&units=metric&lang=pt_br`);
  }

}
