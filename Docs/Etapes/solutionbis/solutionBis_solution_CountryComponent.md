# solutionBis_solution_CountryComponent.md
old: data.service_solutionBis.ts
new : 
>getCountryDetails(countryName: string): Observable<{
 olympic: Olympic;
 totalEntries: number;
 totalMedals: number;
 totalAthletes: number;
 years: number[];
 medals: number[];
 }> {
 return this.getOlympics().pipe(
 map(data => {
 const selectedCountry = data.find(o => o.country === countryName);

      if (!selectedCountry) {
        throw new Error('Country not found');
      }

      const participations = selectedCountry.participations;

      const years = participations.map(p => p.year);
      const medals = participations.map(p => p.medalsCount);

      const totalMedals = medals.reduce((a, b) => a + b, 0);

      const athletes = participations.map(p => p.athleteCount);
      const totalAthletes = athletes.reduce((a, b) => a + b, 0);

      return {
        olympic: selectedCountry,
        totalEntries: participations.length,
        totalMedals,
        totalAthletes,
        years,
        medals
      };
    })
    );
    }

- old : country.component_solutionBis.ts
- New :
>ngOnInit(): void {
 const countryName = this.route.snapshot.paramMap.get('countryName');
 if (!countryName) {
 this.router.navigate(['not-found']);
 return;
 }
 this.olympicService.getCountryDetails(countryName).subscribe({
 next: (data) => {
 this.olympic = data.olympic;
 this.titlePage = data.olympic.country;

      this.totalEntries = data.totalEntries;
      this.totalMedals = data.totalMedals;
      this.totalAthletes = data.totalAthletes;

      this.years = data.years;
      this.medals = data.medals;
    },
    error: () => {
      this.router.navigate(['not-found']);
    }
    });
    } 

## Fin 
$ git status
On branch solutionbis
Changes not staged for commit:
(use "git add/rm <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified:   src/app/pages/country/country.component.ts
modified:   src/app/services/data.service.ts
deleted:    src/app/services/olympic.service.spec.ts
deleted:    src/app/services/olympic.service.ts
