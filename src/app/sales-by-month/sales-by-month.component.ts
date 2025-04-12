import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        name: "Texas",
        type: "line",
        color: '#005A7A',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Florida',
        type: 'line',
        color: '#089AB0',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#0ACDEB',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {
  }
}
