import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Olympic } from '../../models/olympic';
import { Router } from '@angular/router'; // dev4

@Component({
  selector: 'app-medal-chart',
  templateUrl: './medal-chart.component.html',
  styleUrls: ['./medal-chart.component.scss']
})
export class MedalChartComponent implements OnChanges {

  @Input() olympics: Olympic[] = [];

  chart!: Chart;
  constructor(private router: Router) {} //dev4
  ngOnChanges(): void {

    if (this.olympics.length === 0) return;

    const countries = this.olympics.map(o => o.country);

    const medals = this.olympics.map(o =>
      o.participations.reduce((sum, p) => sum + p.medalsCount, 0)
    );

    this.buildChart(countries, medals);
  }

  buildChart(countries: string[], medals: number[]) {

    this.chart = new Chart("DashboardPieChart", {
      type: 'pie',
      data: {
        labels: countries,
        datasets: [{
          data: medals,
          backgroundColor: [
            '#0b868f',
            '#adc3de',
            '#7a3c53',
            '#8f6263',
            'orange',
            '#94819d'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event) => {

          const points = this.chart.getElementsAtEventForMode(
            event as any,
            'nearest',
            { intersect: true },
            true
          );

          if (points.length) {

            const index = points[0].index;

            const countryName = this.chart.data.labels
              ? this.chart.data.labels[index]
              : null;

            if (countryName) {
              this.router.navigate(['/country', countryName]);
            }

          }

        }

      }

    });

  }
}
