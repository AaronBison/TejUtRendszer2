import { Component, Input } from '@angular/core';

import { CustomerMonthSchedule } from 'src/app/models/customerMonthSchedule.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() station!: CustomerMonthSchedule;

}
