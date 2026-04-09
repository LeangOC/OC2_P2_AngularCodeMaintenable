//import { Component, Input, OnInit } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
//export class CountryChartComponent implements OnInit {
export class CountryChartComponent implements OnChanges {
  @Input() years!: number[];
  @Input() medals!: number[];

  chart!: Chart;

  /* ngOnInit(): void {
    this.buildChart();
  }*/

  ngOnChanges(changes: SimpleChanges): void {

    console.log("Years reçus :", this.years);
    console.log("Medals reçus :", this.medals);

    if (this.years && this.medals) {
      this.buildChart();
    }

  }

  buildChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart("countryChart", {
      type: 'line',
      data: {
        labels: this.years,
        datasets: [{
          label: "Medals",
          data: this.medals,
          borderColor: '#0b868f',
          backgroundColor: '#0b868f',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }

    });

  }

}
