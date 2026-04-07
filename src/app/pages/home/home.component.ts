import { Component, OnInit } from '@angular/core';
import { OlympicService } from '../../services/olympic.service';
import { Olympic } from '../../models/olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titlePage: string = 'Olympic Games';

  totalCountries: number = 0;
  totalJOs: number = 0;

  olympics: Olympic[] = [];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe(data => {

      this.olympics = data;

      this.totalCountries = data.length;

      const joSet = new Set<number>();

      data.forEach(country => {
        country.participations.forEach(p => {
          joSet.add(p.year);
        });
      });

      this.totalJOs = joSet.size;
    });
  }

}
