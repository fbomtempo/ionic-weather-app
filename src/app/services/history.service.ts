import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private storage: Storage) { }

  async get(): Promise<any> {
    return await this.storage.get('weather');
  }

  async push(weatherResult: any): Promise<void> {
    const resultHistory = {
      id: uuidv4(),
      name: weatherResult.name,
      country: weatherResult.sys.country,
      temp: weatherResult.main.temp,
      min_temp: weatherResult.main.temp_min,
      max_temp: weatherResult.main.temp_max
    };

    const collectionWeatherHistory: any[] = await this.storage.get('weather') || [];
    collectionWeatherHistory.push(resultHistory);
    await this.storage.set('weather', collectionWeatherHistory);
  }

  async clear(): Promise<void> {
    await this.storage.set('weather', []);
  }

}
