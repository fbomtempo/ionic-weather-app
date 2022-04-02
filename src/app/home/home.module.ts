import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WeatherSearchComponent } from '../components/weather-search/weather-search.component';
import { WeatherResultComponent } from '../components/weather-result/weather-result.component';
import { WeatherHistoryComponent } from '../components/weather-history/weather-history.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { HistoryService } from '../services/history.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, WeatherSearchComponent, WeatherResultComponent, WeatherHistoryComponent],
  providers: [WeatherService, HistoryService]
})
export class HomePageModule {}
