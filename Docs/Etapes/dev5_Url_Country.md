# dev5_Url_Country.md
Après refactorisation du composant CountryComponent, j'ai réussi à démarrer l'application Jeu Olympic Angular sans erreur. 
Cependant je n'ai pas la fonctionnalité qui me permet d'aller vers l'url http://localhost:4200/country/France 
quand je clique sur l'icône Camenbert France (France medal-chart.component.html de home.component.html )

## Réponses
Ton application fonctionne bien 👍 mais tu as perdu la navigation quand on clique sur une part du camembert. 
C’est normal : cette logique était dans l’ancien HomeComponent et elle n’a pas encore été remise dans 
le nouveau MedalChartComponent après la refactorisation.
Avant, dans ton ancien code, tu avais ceci :

    onClick: (e) => {
      if (e.native) {
      const points = pieChart.getElementsAtEventForMode(e.native, 'point', { intersect: true }, true)
      if (points.length) {
      const firstPoint = points[0];
      const countryName = pieChart.data.labels[firstPoint.index];
      this.router.navigate(['country', countryName]);
        }
      }
    }
Cette logique doit maintenant être dans medal-chart.component.ts.

1. Implémenation fonction onClick : medal-chart.component.ts
- import dans medal-chart.component.ts

       import { Router } from '@angular/router';
       ...
       constructor(private router: Router) {}

2. insertion la fonction onClick ci-dessus dans Chart.js
   Avant : medal-chart.component_dev5.ts

Schéma final du flux :

HomeComponent
    │
    ▼
MedalChartComponent
    │
Chart.js onClick
    │
Router.navigate()
    │
    ▼
CountryComponent
