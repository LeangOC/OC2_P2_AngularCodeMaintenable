# dev7_Refactorisation.md
$ ng generate component components/header_country
CREATE src/app/components/header-country/header-country.component.html (30 bytes)
CREATE src/app/components/header-country/header-country.component.spec.ts (665 bytes)
CREATE src/app/components/header-country/header-country.component.ts (278 bytes)
CREATE src/app/components/header-country/header-country.component.scss (0 bytes)

# home.component.ts

> const joSet = new Set<number>();

Elle crée un Set vide :
Une collection de valeurs uniques (pas de doublons)

Tableau classique :
> const arr = [2012, 2012, 2016];
=> résulat :
> [2012, 2012, 2016]  ❌ doublons

Set
> const set = new Set([2012, 2012, 2016]);
   Set {2012, 2016}  ✔ unique

Piège d'affichage console :
> const joSet = new Set<number>();
console.log(joSet);
data.forEach(...)

Je devrais avoir :
Set(0)[]
mais j'ai 
Set(3) [ 2012, 2016, 2020 ]

Le navigateur n’affiche PAS une “photo” instantanée
Il affiche une référence vers l’objet

Solution pour afficher les données instannéés :
contenu : console.log([...joSet])
taille  : console.log(joSet.size);
json : console.log(JSON.stringify([...joSet]));
