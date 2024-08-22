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
        height: 325,
      },
      title: {
        text: 'sales by Category',
      },
      series: [
        {
          type: 'pie',
          data: [
            { name: 'Electronics', y: 41.0, color: '#044342' },
            { name: 'Groceries', y: 33.8, color: '#7e0505' },
            { name: 'Cosmetics', y: 6.5, color: '#ed9e20' },
            { name: 'Clothes', y: 15.2, color: '#6920fb' },
            { name: 'Appliances', y: 3.5, color: '#121212' },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  ngOnInit(): void {}
}
