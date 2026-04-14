import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
export class CountryChartComponent implements OnInit {

  @Input() years!: number[];
  @Input() medals!: number[];

  chart!: Chart;

  ngOnInit(): void {
    this.buildChart();
  }

  buildChart() {

    this.chart = new Chart("countryChart", {
      type: 'line',
      data: {
        labels: this.years,
        datasets: [{
          label: "Medals",
          data: this.medals,
          backgroundColor: '#0b868f'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

  }

}
