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

//Utilisation commun
  getOlympics(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.olympicUrl)
  }

  // Utilisé par HommeComponent
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

  // Utilisé par CountryComponent
  getCountryDetails(countryName: string): Observable<{
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
}
