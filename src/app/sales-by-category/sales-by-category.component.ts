import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {
  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 350
      },
      title: {
        text: 'Sales by Category'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [
        {
          type: 'pie',
          data: [
            { name: 'Electronics', y: 41.0, color: '#005A7A' },
            { name: 'Groceries', y: 33.8, color: '#056776' },
            { name: 'Clothes', y: 17.2, color: '#089AB0' },
            { name: 'Cosmetics', y: 8.0, color: '#0ACDEB' },
            { name: 'Appliances', y: 3.8, color: '#99F1FF' }
          ]
        }
      ],
      credits: {
        enabled: false
      }
    });
  }

  ngOnInit(): void {}
}
