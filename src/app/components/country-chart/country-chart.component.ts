
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



  ngOnChanges(changes: SimpleChanges): void {

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
          backgroundColor: '#0b868f',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#333',
              font: {
                size: 14
              }
            }
          }
        }
      }


    });

  }

}
