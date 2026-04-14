# dev3_Services_Olympic.md :
1. $ ng generate service services/olympic
Il me génère deux fichiers dans le répertoire services :
- Olympic.sevice.spec.ts
- Olympic.service.ts

Avant Olympic.service.ts :  

    import { Injectable } from '@angular/core';
    @Injectable({
    providedIn: 'root'
    })
    export class OlympicService {
    constructor() { }
    }

Après :
=> Voir fichier




## Amélioration
Avant :  

    Component → HTTP

Après :

    Component → Service → Data

Cela respecte le "Singleton Pattern".
