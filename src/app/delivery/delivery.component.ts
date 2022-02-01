import { Component, OnInit } from '@angular/core';

import { Station } from '../models/station.model';
import { DeliveryService } from './delivery.sercive';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    constructor (private deliveryService: DeliveryService) { }

    stations: Station[] = [];

    ngOnInit(): void {
        this.stations = this.deliveryService.stations;
    }

}