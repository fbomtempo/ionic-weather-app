import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { HistoryService } from 'src/app/services/history.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss'],
})
export class WeatherResultComponent implements OnInit {

  @Output() event = new EventEmitter();
  @Input() searchResult: any;
  weatherResult$: Observable<any>;
  weatherIcon: string;

  constructor(
    private weatherService: WeatherService,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    this.weatherResult$ = this.weatherService.weather(this.searchResult.lat, this.searchResult.lon);
    this.weatherResult$.subscribe(weatherResult => {
      weatherResult.weather.forEach(element => {
        this.weatherIcon = element.icon;
      });
      this.historyService.push(weatherResult);
    });
  }

  emitEvent(loadPage: any): void {
    this.event.emit(loadPage);
  }

}
