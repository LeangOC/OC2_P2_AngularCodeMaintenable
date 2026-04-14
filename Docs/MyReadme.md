# Master : origin

# dev1 < Master
Etape1 : Analysez le code existant et  repérez les problèmes
- Une liste structurée des problèmes identifiés, accompagnée de commentaires personnels, 
sauvegardée dans un fichier notes-architecture.md

# dev2 
- Etape2 : Concevez une nouvelle architecture adaptée
  =>  Un schéma simple ou même une liste décrivant la nouvelle structure du front-end,
  accompagné d’explications dans notes-architecture.md 

# dev3 : refactoriser home components
- Etape3 : Refactorez les composants existants en appliquant l'architecture
1. Implémenter : app/models/olympic.ts et app/models/participation.ts
2. Implémenter service
  $ ng generate service services/olympic
   => dev3_1_Services_Olympic.md
3. Refactoriser component HomeComponent
   => dev3_2_HomeComponent_Refactorisation.md
4. Création d’un composant réutilisable (Header)
   $ ng generate component components/header
   => plus refactorisation  : dev3_3_Components_Header.md
5. Refactoriser home.component.html
   => dev3_4_Home-Component-html.md
6. Refactoriser header.component.html
   => dev3_5_header-component-html.md
7. Erreur lors de démarrage 
   => dev3_6_Demarrage_Erreur.md
8. Composant graphique
9. => dev3_7_composant_graphique.md

# dev4 : refactoriser country components

  1. Add new component country-chart/
   => dev4_1_CountryChartComponent.md

  2. Refactoriser CountryComponent
  =>  dev4_2_CountryComponent.md

# dev5 : implémentation fonctionnalité clic vers country/pays
  => dev5_Url_Country.md

# dev6 : imprémentation tracé courbe pays
  => dev6_Courbe_Pays.md

# dev7 : Refactorisation et ménage
=> dev7_Refactorisation.md

# solution 
- Mettre pipe() dans service : services/olympic => services/data, home.component.ts
=> 1er factorisation  : solution_1_service.md

# solution1 
- 2ème foctorisation DataService : un seul get Http avec shareReplay
=> solution1_1_service.md

# solution2 : 
- 3ème factorisation DataService : but avoir un seul Subscribe dans Homecomponent
- 2ème foctorisation HomeComponent : but avoir un seul Subscribe dans ngOninit()
=> solution2_1_HomeComponent_Subscribe.md

# solutionbis < solution
- transférer l'abonnement du composant CountryComponent vers DataService
=> solutionBis_solution_CountryComponent.md

# solutionbis2
- implémentation interface model CountryDetails
=> solutionbis2_1_CountryDetails_Model.md

Pour que le site soit accessible depuis un autre appareil ( tablette ou pc) :
- Exposer le serveur sur toutes les interfaces : ng serve --host 0.0.0.0
  ( TCP [::1]:4200 LISTENING => Angular écoute uniquement sur localhost (IPv6 ::1)
- Autoriser le port entrant 4200 Pare-feu Windows Defender
- Passer l'interface réseau Public en Privé
