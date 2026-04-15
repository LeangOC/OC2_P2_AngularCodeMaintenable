### Archictecture avant :
+---app  
|   /---pages  
|       +---country  
|       +---home  
|       /---not-found  
+---assets  
|   +---images  
|   /---mock  
/---environments  


### Architecture de mon application :  
+---app  
|   +---components  
|   |   +---country-chart  
|   |   +---header  
|   |   +---header-country  
|   |   /---medal-chart  
|   +---models  
|   +---pages  
|   |   +---country  
|   |   +---home  
|   |   /---not-found  
|   /---services  
+---assets  
|   +---images  
|   /---mock  
/---environments  

1. Arborescence des dossiers : 
 - app/ : C’est le cœur de l'application Angular
 - components/ : Contient les composants réutilisables
 - models/ : Définit les interfaces ou classes TypeScript
 - pages/ : Regroupe les pages principales de l’application
 - services/ : Contient les services Angular
 - assets/ : Ressources statiques (images,donnés simulées) 
 - environments/ : Configuration selon l’environnement (dev / prod)

2. Les composants et leurs rôles  
Dans components/ :  
- country-chart :  
  Affiche les nombres de médails des années olympiques sous forme de courbe  
  Utilisé dans la page pages/country  
- medal-chart:  
  Affiche le nombre de médailles par pays sous forme graphique  
  Utilisé dans la page pages/home  
  - header  
  Affiche le titre,le nombre de pays,le nombre de jeux olympique.
    Utilisé dans la page pages/home
  - header-country
    Affiche le titre,le nombre de jeux olympiques,le nombre total des médails, et le nombre total des athlètes.
    Utilisé dans la page pages/country

3. Le service Angular et son rôle
Dans services/ :
Le service ici sert à centraliser la logique métier et les données:
- récupérer des données (API ou mock)
- partager des données entre composants
- éviter de dupliquer du code
- gérer la logique métier (transformations, filtres, etc.)  

Conclusion : 
Mon architecture est prêt pour passer en API : 
- Remplacer les données mock par des appels HTTP (HttpClient)
- Sans modifier les composants ni les pages.
