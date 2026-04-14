# solution2_1_HomeComponent_Subscribe.md

Old : data.service_solution2.tst
new:
>getStats() {
return this.olympics$.pipe(
map(data => {
const joSet = new Set<number>();

      data.forEach(country => {
        country.participations.forEach(p => joSet.add(p.year));
      });

      return {
        olympics: data,
        totalCountries: data.length,
        totalJOs: joSet.size
      };
    })
);
}


Old : home.component_solution2.ts ou
>ngOnInit(): void {
     this.olympicService.getOlympics().subscribe(data => {
       this.olympics = data;
     });

     this.olympicService.getTotalCountries().subscribe(count => {
       this.totalCountries = count;
     });

     this.olympicService.getTotalJOs().subscribe(count => {
       this.totalJOs = count;
     });
    }

New :
>this.olympicService.getStats().subscribe(stats => {
this.olympics = stats.olympics;
this.totalCountries = stats.totalCountries;
this.totalJOs = stats.totalJOs;
});

