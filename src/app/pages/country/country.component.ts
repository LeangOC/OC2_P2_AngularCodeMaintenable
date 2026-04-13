import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Olympic } from '../../models/olympic';
import { DataService } from '../../services/data.service';

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
    private olympicService: DataService
  ) {}

  ngOnInit(): void {

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

}
