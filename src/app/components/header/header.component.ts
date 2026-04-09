import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title!: string
  @Input() value1!: number
  @Input() value2!: number
  @Input() value3!: number

}
