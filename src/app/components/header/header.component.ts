import { Component, Input } from '@angular/core'
import {KPI} from '../../models/kpi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title!: string;
  @Input() kpis: KPI[] = [];

}
