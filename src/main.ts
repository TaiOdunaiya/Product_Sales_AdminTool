import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as Highcharts from 'highcharts';

// Initialize Highcharts
Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: 'inherit'
    }
  }
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
