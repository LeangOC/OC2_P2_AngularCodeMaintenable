# dev3_Demarrage_Erreur.md

1. Error: src/app/pages/home/home.component.html:5:12 - error TS2339: Property 'titlePage' does not exist on type 'HomeComponent'.
    5   [title]="titlePage"

Refactoriser : src/app/pages/home/home.component.ts

Avant : 

    import { Component, OnInit } from '@angular/core'
    import { OlympicService } from '../../services/olympic.service'
    import { Olympic } from '../../models/olympic'

    @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {

    olympics: Olympic[] = []

    constructor(private olympicService: OlympicService) {}

    ngOnInit(): void {
    this.olympicService.getOlympics().subscribe(data => {
    this.olympics = data
    })
    }

    }

Après voir fichier

2. Error: src/app/pages/home/home.component.html:10:35 - error TS2339: Property 'pieChart' does not exist on type 'HomeComponent'.
   10 <canvas id="DashboardPieChart">{{ pieChart }}</canvas>
Refactoriser : home.component.html

Avant :  

    <h2>Olympic games app</h2>
    <hr/>
    <app-header
      [title]="titlePage"
      [value1]="totalCountries"
      [value2]="totalJOs">
    </app-header>
    <canvas id="DashboardPieChart">{{ pieChart }}</canvas>


Après :
  remplacer 

    <canvas id="DashboardPieChart">{{ pieChart }}</canvas> par 
    <canvas id="DashboardPieChart"></canvas>

car Chart.js n’utilise pas {{ }} dans le HTML.
Donc il faut supprimer pieChart du HTML.

Mais il n' y a plus de schéma Camenbert
