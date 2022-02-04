import { Component, Input, OnInit } from '@angular/core';

import { Station } from 'src/app/models/station.model';
import { DeliveryService } from '../delivery.sercive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() station!: Station;

}
