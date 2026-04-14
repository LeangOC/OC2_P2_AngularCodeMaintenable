# solution1_1_service.md

old : data.service_solution1.ts
new :
>import { shareReplay } from 'rxjs/operators';
 private olympics$ = this.http.get<Olympic[]>(this.olympicUrl).pipe(
  shareReplay(1)
  );
 getOlympics(): Observable<Olympic[]> {
  return this.olympics$;
  }

Ce Observable olympics$ :
✔ fait la requête HTTP
✔ met en cache le résultat
✔ renvoie toujours les données brutes (Olympic[])

ici :
>getTotalCountries(): Observable<number> {
 return this.olympics$.pipe(
 map(data => data.length)
 );
 }

Ici :
✔ on ne refait PAS la requête http
✔ on transforme le résultat déjà en cache
