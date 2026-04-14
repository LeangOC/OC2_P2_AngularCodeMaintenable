# dev4_CountryComponent.md
1. Architecture :


    src/app/

        components/
              header/
              medal-chart/
              country-chart/      ← nouveau

        pages/
              home/
              country/
              not-found/

        services/
              olympic.service.ts

        models/
              olympic.ts
              participation.ts

2. Create country-chart component
   $ ng generate component components/country-chart 
   CREATE src/app/components/country-chart/country-chart.component.html (29 bytes)
   CREATE src/app/components/country-chart/country-chart.component.spec.ts (658 bytes)
   CREATE src/app/components/country-chart/country-chart.component.ts (274 bytes)
   CREATE src/app/components/country-chart/country-chart.component.scss (0 bytes)

 3. Refactoriser country-chart.component.ts

- Origine : country-chart.component_origin.ts
- 
- Après : voir fichier courant
    1. CountryChartComponent (export class CountryChartComponent implements OnInit ) en rouge
    Warning :  CountryChartComponent is not declared in any Angular module  
    =>import { CountryChartComponent } dans "app.module.ts"
  
4. Refactoriser country-chart.component.html
- Origin :    <p>country-chart works!</p>
- Après : voir fichier courant

