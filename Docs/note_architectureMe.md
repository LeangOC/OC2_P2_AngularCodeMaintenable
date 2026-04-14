# 🏗️ Architecture actuelle de TéléSport

## 1. Problème de structure

### 📁 Arborescence actuelle
src/app  
├── pages  
│ ├── home  
│ ├── country  
│ └── not-found  
├── app.component  
├── app.module  
└── app-routing.module  


### ❌ Non-respect des bonnes pratiques Angular

La structure actuelle ne respecte pas les standards recommandés.  
Plusieurs dossiers essentiels sont absents :

- services
- models
- components réutilisables
- shared

### 📌 Exigences non respectées

Les spécifications demandent explicitement :

- des interfaces TypeScript
- un DataService
- un HeaderComponent réutilisable

### ⚠️ Conséquences

Cette architecture limite :

- la réutilisation du code
- la séparation des responsabilités
- la maintenabilité du projet

---

## 2. Composants trop volumineux

### 📄 Composants concernés

- home.component.ts
- country.component.ts

### ❌ Responsabilités multiples

Ces composants :

- récupèrent les données (JSON / HTTP)
- traitent les données
- génèrent les graphiques
- gèrent la navigation

👉 Ils mélangent donc :

- logique métier
- accès aux données
- affichage

### ⚠️ Pourquoi c’est problématique

Selon les bonnes pratiques Angular :

- un composant doit gérer la vue
- un service doit gérer les données

### 💣 Dette technique

Si une API remplace le JSON demain, plusieurs composants devront être modifiés.

---

## 3. Duplication de logique

### 🔁 Cas observé

HomeComponent et CountryComponent effectuent des traitements similaires :

- calcul du nombre de médailles
- récupération des participations
- manipulation des données

### ❌ Problème

Violation du principe DRY (Don't Repeat Yourself).

### ✅ Solution

Déplacer la logique métier dans un service dédié.

---

## 4. Appels HTTP dans les composants

### ❌ Mauvaise pratique

Les appels HTTP sont effectués directement dans :

- home.component.ts
- country.component.ts

### ⚠️ Problème

Cela viole le principe de Separation of Concerns.

### ✅ Bonne pratique

Architecture recommandée :

Component → Service → API

---

## 5. Absence de typage TypeScript

### ❌ Code problématique

```ts
this.http.get<any[]>(this.olympicUrl)
const selectedCountry = data.find((i: any) => i.country === countryName);
