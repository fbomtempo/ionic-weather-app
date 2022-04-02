import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pageLoader: Subject<any> = new Subject();
  loadPage: any = {
    page: 'search'
  };
  pageTitle = 'Weather App 🌤️';

  constructor() {}

  ngOnInit(): void {
    const pageLoader$ = this.pageLoader.asObservable();
    pageLoader$.subscribe(loadPage => {
      this.loadPage = loadPage;
      if (this.loadPage.page === 'search') {
        this.pageTitle = 'Weather App 🌤️';
      } else if (this.loadPage.page === 'result') {
        this.pageTitle = 'Weather';
      } else {
        this.pageTitle = 'History';
      }
    });
  }

  setLoadedPage(loadPage: any): void {
    this.pageLoader.next(loadPage);
  }
}
