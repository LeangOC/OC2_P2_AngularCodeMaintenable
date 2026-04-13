import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Olympic } from '../models/olympic'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private olympicUrl = 'assets/mock/olympic.json'

  constructor(private http: HttpClient) { }
  getOlympics(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.olympicUrl)
  }

  getTotalCountries(): Observable<number> {
    return this.getOlympics().pipe(
      map(data => data.length)
    );
  }

  getTotalJOs(): Observable<number> {
    return this.getOlympics().pipe(
      map(data => {
        const joSet = new Set<number>();

        data.forEach(country => {
          country.participations.forEach(p => {
            joSet.add(p.year);
          });
        });

        return joSet.size;
      })
    );
  }
}
