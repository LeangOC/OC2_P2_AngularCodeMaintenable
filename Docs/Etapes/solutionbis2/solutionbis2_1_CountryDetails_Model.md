# solutionbis2_1_CountryDetails_Model.md

- Interface model CountryDetails :

>import { Olympic } from "./olympic"
 export interface CountryDetails {
 olympic: Olympic;
 totalEntries: number;
 totalMedals: number;
 totalAthletes: number;
 years: number[];
 medals: number[];
 }

Dans le service, on sait ce qu'on reçoit
>getCountryDetails(): Observable<CountryDetails>
