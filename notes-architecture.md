# L’architecture TéléSport actuelle  :
## 1. Problème de structure :
Arborescence actuelle :
   src/app  
   ├── pages  
   │   ├── home  
   │   ├── country  
   │   └── not-found  
   ├── app.component  
   ├── app.module  
   └── app-routing.module  

### La structure Angular ne respecte pas les bonnes pratiques recommandées :  
Manque plusieurs dossiers importants :
  - services
  - models
  - components réutilisables
  - shared

Or les spécifications demandent explicitement :  
  - des interfaces TypeScript  
  - un DataService  
  - un HeaderComponent réutilisable  

Conséquence
L’architecture actuelle empêche :
  - la réutilisation du code
  - la séparation des responsabilités
  - la maintenabilité.



## 2. Fichiers trop volumineux / logique trop concentrée
  
### Ces deux composants "home.component.ts" et "country.component.ts"
  - récupèrent les données ( fichiers json , appel http)
  - traitent les données
  - créent le graphique
  - gèrent la navigation

Donc ils mélangent :  
  - la logique métier  
  - les accès aux données  
  - l'affichage  

Pourquoi c’est un problème  
Selon les bonnes pratiques Angular :  
  - un composant doit gérer la vue
  - un service doit gérer les données

Dette technique  
Si une API remplace le JSON demain, il faudra modifier plusieurs composants.



## 3. Duplication de logique entre les composants:
### Les composants HomeComponent et CountryComponent effectuent des calculs similaires :
  - calcul du nombre de médailles
  - récupération des participations
  - manipulation des données.

Problème
Violation du principe DRY (Don't Repeat Yourself).

=> Solution
Déplacer la logique métier dans un service.



4. Appels HTTP directement dans les composants
Les appels HTTP sont effectués directement dans :
home.component.ts
country.component.ts

Problème
Les composants ne doivent pas gérer directement les appels HTTP.
Cela viole le principe Separation of Concerns.

Bonne pratique
Architecture recommandée :
Component → Service → API

5. Absence de typage TypeScript (any):
Le code utilise plusieurs fois any :
    this.http.get<any[]>(this.olympicUrl)
    const selectedCountry = data.find((i: any) => i.country === countryName);
=> Solution :
  - Créer des interfaces TypeScript dans : src/app/models/
    export interface Olympic
    export interface Participation

6. Les bouts de code à supprimer (console.log  par exemple)
Présence de code de debug (console.log) :
  Exemple dans home.component.ts :

 console.log(`Liste des données : ${JSON.stringify(data)}`);
et
 console.log(`erreur : ${error}`);

Problème
Les logs de debug ne doivent pas rester dans le code final.

Ils peuvent :
- polluer la console
- exposer des informations sensibles.


7. Mauvaise gestion des observables
   Exemple :
   this.http.get<any[]>(this.olympicUrl).pipe().subscribe(...)

Problèmes
- pipe() est utilisé sans opérateur
- aucune gestion de désabonnement
- logique RxJS très limitée.

Risques
- fuite mémoire
- mauvaise maintenabilité du code.


8. Vérifiez si des données sont gérées directement dans un composant → notez-le comme anti-pattern.
   Appels HTTP dans les composants (Anti-pattern Angular)

Les composants utilisent directement HttpClient.
home.component.ts
  constructor(private router: Router, private http:HttpClient) { }
et
  this.http.get<any[]>(this.olympicUrl)

country.component.ts
  constructor(private route: ActivatedRoute, private router: Router, private http:

Dans une architecture Angular propre : Component → Service → API

9. Repérez des fichiers mal placés (ex. un service dans components).
Le chemin vers les données est défini directement dans les composants :
    private olympicUrl = './assets/mock/olympic.json';
problème : La gestion des données devrait être centralisée dans un service



Conclusion :
Une refactorisation sera nécessaire afin de :

- séparer les responsabilités 
  ex : component -> affichage  et service -> récupération des données

- améliorer la maintenabilité  ( anti-pattern)
   ex: "private olympicUrl = './assets/mock/olympic.json'" est présent dans plusieurs composants
   => Centraliser dans un service data.service.ts : "private apiUrl = './assets/mock/olympic.json';"

- respecter les bonnes pratiques Angular.
  ex: Le projet utilise le type any : "this.http.get<any[]>(this.olympicUrl)"
  (Cela supprime les avantages de TypeScript)
  => Créer des interfaces TypeScript dans src/app/models : "export interface Participation"

# Etape 2 - Proposition d’une nouvelle architecture front-end

Suite à l’analyse du starter code, une nouvelle architecture est proposée afin de :

  - améliorer la lisibilité du projet
  - séparer les responsabilités
  - respecter les bonnes pratiques Angular
  - préparer l’intégration future d’une API backend.

src/app
│
├── components/
│   └── header/
│       ├── header.component.ts
│       ├── header.component.html
│       └── header.component.scss
│
├── pages/
│   ├── home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.scss
│   │
│   ├── country/
│   │   ├── country.component.ts
│   │   ├── country.component.html
│   │   └── country.component.scss
│   │
│   └── not-found/
│       ├── not-found.component.ts
│       ├── not-found.component.html
│       └── not-found.component.scss
│
├── services/
│   └── data.service.ts
│
├── models/
│   ├── olympic.model.ts
│   └── participation.model.ts
│
├── app-routing.module.ts
├── app.component.ts
└── app.module.ts

## Rôle de chaque dossier :
- components/ :
   Ce dossier contient les composants réutilisables dans plusieurs pages. 
- pages/ :
   Les pages représentent les écrans principaux de l’application.
- services/ :
  Ce dossier centralise l’accès aux données.
- models/ :
  Ce dossier contient les interfaces TypeScript représentant les données.
