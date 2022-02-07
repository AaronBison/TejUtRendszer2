import { Component, OnInit } from '@angular/core';

import { CustomerMonthSchedule } from '../models/customerMonthSchedule.model';
import { CURRENT_TIME, SCHEDULE_SEPARATOR_HOUR } from '../utils/constants';
import { DeliveryService } from './delivery.sercive';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    constructor (private deliveryService: DeliveryService) { }

    stations: CustomerMonthSchedule[] = [];
    title: string = '';


    ngOnInit(): void {
        this.stations = this.deliveryService.stations;
        this.isAfternoonCheck();
    }

    isAfternoonCheck() {
        const isAfternoon = CURRENT_TIME.getHours() >= SCHEDULE_SEPARATOR_HOUR
        this.title = isAfternoon ? 'Délutáni beosztás' : 'Délelőtti beosztás';
    }

}