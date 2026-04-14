# dev4_2_CountryComponent.md
1. Architecture
   - Avant :
     CountryComponent
      ├─ HTTP
      ├─ routing
      ├─ calcul
      ├─ chart
      └─ affichage

  - Après :
    CountryComponent
    ├─ routing
    ├─ calcul
    └─ template

    CountryChartComponent
     └─ Chart.js

    OlympicService
      └─ accès aux données


1. Refactoriser country-chart.component.html
  - origin : country.component_dev4.html
  - Now : current file

2. Refactoriser country.component.ts
  - origin : country.component_dev4.ts

