# dev3_composant_graphique.md

$ ng generate component components/medal-chart


    CREATE src/app/components/medal-chart/medal-chart.component.html (27 bytes)
    CREATE src/app/components/medal-chart/medal-chart.component.spec.ts (644 bytes)
    CREATE src/app/components/medal-chart/medal-chart.component.ts (266 bytes)
    CREATE src/app/components/medal-chart/medal-chart.component.scss (0 bytes)

components/
  medal-chart/
      medal-chart.component.ts
      medal-chart.component.html
      medal-chart.component.spec.ts
      medal-chart.component.scss

1. Refactoriser home.component.html

Avant :

    <h2>Olympic games app</h2>
    <hr/>

    <app-header
    [title]="titlePage"
    [value1]="totalCountries"
    [value2]="totalJOs">
    </app-header>

    <canvas id="DashboardPieChart"></canvas>

Après :

    <h2>Olympic games app</h2>
    <hr/>

    <app-header
      [title]="titlePage"
      [value1]="totalCountries"
      [value2]="totalJOs">
    </app-header>

    <app-medal-chart
    [olympics]="olympics">
    </app-medal-chart>



1. bis : refactoriser home.component.ts
 
Avant : 

import { Component, OnInit } from '@angular/core';
import { OlympicService } from '../../services/olympic.service';
import { Olympic } from '../../models/olympic';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

titlePage: string = 'Olympic Games';

totalCountries: number = 0;
totalJOs: number = 0;

olympics: Olympic[] = [];

constructor(private olympicService: OlympicService) {}

ngOnInit(): void {
this.olympicService.getOlympics().subscribe(data => {

      this.olympics = data;

      this.totalCountries = data.length;

      const joSet = new Set<number>();

      data.forEach(country => {
        country.participations.forEach(p => {
          joSet.add(p.year);
        });
      });

      this.totalJOs = joSet.size;
    });
}

}

Après voir fichier

2. refactoriser medal-chart.component.ts

Origin :

    import { Component } from '@angular/core';

    @Component({
     selector: 'app-medal-chart',
     standalone: true,
     imports: [],
     templateUrl: './medal-chart.component.html',
     styleUrl: './medal-chart.component.scss'
    })
    export class MedalChartComponent {

    }

Après :

import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Olympic } from '../../models/olympic';

@Component({
selector: 'app-medal-chart',
templateUrl: './medal-chart.component.html',
styleUrls: ['./medal-chart.component.scss']
})
export class MedalChartComponent implements OnChanges {

@Input() olympics: Olympic[] = [];

chart!: Chart;

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
        aspectRatio: 2.5
      }
    });

}
}

3. refactoriser : medal-chart.component.html

origin :

    <p>medal-chart works!</p>

Après :

    <canvas id="DashboardPieChart"></canvas>


Erreur lors de démarrage : 

    'app-medal-chart' is not a known element
=> Importer le composant dans src/app/app.module.ts

 import { MedalChartComponent } from './components/medal-chart/medal-chart.component';


@NgModule({
declarations: [
AppComponent,
HomeComponent,
NotFoundComponent,
CountryComponent,
HeaderComponent,
MedalChartComponent   // ✅ AJOUT ICI
],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [provideHttpClient()],
bootstrap: [AppComponent],
})
export class AppModule {}

4. Camenbert trop petit et pas centré

- Refactoriser medal-chart.component.html

Avant :

    <canvas id="DashboardPieChart"></canvas>

Après :

    <div class="chart-container">
    <canvas id="DashboardPieChart"></canvas>
    </div>
 
- Implémenter : medal-chart.component.scss
  
Avant : vide
après :

    .chart-container {
    width: 500px;
    margin: 40px auto;
    display: block;
      }

Ajuster medal-chart.component.ts

modifie les options :

    options: {  
    responsive: true,
    maintainAspectRatio: false
    }

La taille de Camenbert est peu petit

Actuel sur medal-chart.component.ts

.chart-container {
width: 510px;
margin: 20px auto;
display: block;
}

après :
.chart-container {
width: 510px;
height: 400px;
margin: 20px auto;
}

