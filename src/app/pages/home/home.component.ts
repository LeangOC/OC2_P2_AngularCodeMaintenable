import { Component, OnInit } from '@angular/core';
//import { OlympicService } from '../../services/olympic.service';
import { DataService } from '../../services/data.service';
import { Olympic } from '../../models/olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titlePage = "Medals per Country";

  olympics: Olympic[] = [];

  totalCountries = 0;
  totalJOs = 0;

  constructor(private olympicService: DataService) { }

  ngOnInit(): void {

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
}
