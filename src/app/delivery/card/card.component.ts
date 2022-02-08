import { Component, Input } from '@angular/core';

import { CustomerMonthSchedule } from 'src/app/models/customerMonthSchedule.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() station!: CustomerMonthSchedule;
  toggleOpacity = false;

  onToggleOpacity() {
    this.toggleOpacity = !this.toggleOpacity;
  }
}
