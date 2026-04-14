# dev3_Components_Header.md
$ ng generate component components/header

    CREATE src/app/components/header/header.component.html (22 bytes)
    CREATE src/app/components/header/header.component.spec.ts (615 bytes)
    CREATE src/app/components/header/header.component.ts (247 bytes)
    CREATE src/app/components/header/header.component.scss (0 bytes)

1. Refactoriser header.component.ts

origin :

    import { Component } from '@angular/core';
    @Component({
      selector: 'app-header',
      standalone: true,
      imports: [],
      templateUrl: './header.component.html',
      styleUrl: './header.component.scss'
    })
    export class HeaderComponent {
    }

Après : voir fichier

2. Refactoriser header.component.html

origin :

    <p>header works!</p>

après : voir fichier

