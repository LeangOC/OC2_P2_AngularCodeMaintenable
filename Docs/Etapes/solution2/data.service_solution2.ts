import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Olympic } from '../models/olympic'
import { map } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private olympicUrl = 'assets/mock/olympic.json'
  private olympics$ = this.http.get<Olympic[]>(this.olympicUrl).pipe(
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }


  getOlympics(): Observable<Olympic[]> {
    return this.olympics$;
  }


  getTotalCountries(): Observable<number> {
    return this.olympics$.pipe(
      map(data => data.length)
    );
  }

  getTotalJOs(): Observable<number> {
    return this.olympics$.pipe(
      map(data => {
        const joSet = new Set<number>();
        data.forEach(country => {
          country.participations.forEach(p => joSet.add(p.year));
        });
        return joSet.size;
      })
    );
  }

}
