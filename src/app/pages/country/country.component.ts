import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../services/olympic.service';
import { Olympic } from '../../models/olympic';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  olympic!: Olympic;
  titlePage: string = '';
  totalEntries: number = 0;
  totalMedals: number = 0;
  totalAthletes: number = 0;

  years: number[] = [];
  medals: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {

    const countryName = this.route.snapshot.paramMap.get('countryName');

    this.olympicService.getOlympics().subscribe(data => {

      const selectedCountry = data.find(o => o.country === countryName);

      if (!selectedCountry) {
        this.router.navigate(['not-found']);
        return;
      }

      this.olympic = selectedCountry;
      this.titlePage = selectedCountry.country;

      const participations = selectedCountry.participations;

      this.totalEntries = participations.length;

      this.years = participations.map(p => p.year);
      this.medals = participations.map(p => p.medalsCount);
      console.log("YEARS:", this.years);
      console.log("MEDALS:", this.medals);
      this.totalMedals = this.medals.reduce((a, b) => a + b, 0);

      const athletes = participations.map(p => p.athleteCount);
      this.totalAthletes = athletes.reduce((a, b) => a + b, 0);

    });

  }

}
