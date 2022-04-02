import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.scss'],
})
export class WeatherHistoryComponent implements OnInit {

  @Output() event = new EventEmitter();
  collectionWeatherHistory: any[];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  async getHistory(): Promise<void> {
    this.collectionWeatherHistory = await this.historyService.get();
  }

  clear(): void {
    this.historyService.clear();
    this.emitEvent({ page: 'search' });
  }

  emitEvent(loadPage: any): void {
    this.event.emit(loadPage);
  }

}
