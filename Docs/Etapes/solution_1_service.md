# solution_1_service.md

## Recommandations pas à pas de l'étape 4
>$ ng generate service services/data
CREATE src/app/services/data.service.spec.ts (363 bytes)
CREATE src/app/services/data.service.ts (142 bytes)

## 1er factorisation : services/data.service.ts, home.component.ts , 
- voir Docs/solution/data.service_1.ts
- home.component.ts : 
> ngOnInit(): void {

    this.olympicService.getOlympics().subscribe(data => {
      this.olympics = data;
    });

    this.olympicService.getTotalCountries().subscribe(count => {
      this.totalCountries = count;
    });

    this.olympicService.getTotalJOs().subscribe(count => {
      this.totalJOs = count;
    });

