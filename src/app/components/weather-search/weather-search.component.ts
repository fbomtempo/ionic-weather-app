import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { EventEmitter } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {

  @Output() event = new EventEmitter();

  input: string;
  results$: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {}

  searchLocation(): void {
    this.results$ = this.weatherService.search(this.input);
  }

  clearInput(): void {
    this.input = undefined;
    this.results$ = undefined;
  }

  loadHistory(): void {
    this.emitEvent({ page: 'history' });
  }

  emitEvent(loadPage: any): void {
    this.event.emit(loadPage);
  }
}
