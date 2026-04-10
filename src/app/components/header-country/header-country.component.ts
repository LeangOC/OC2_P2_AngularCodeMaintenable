import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-country',
  templateUrl: './header-country.component.html',
  styleUrl: './header-country.component.scss'
})
export class HeaderCountryComponent {
@Input() title!: string;
@Input() value1!: number;
@Input() value2!: number;
@Input() value3!: number;
}
