import { Component, OnInit } from '@angular/core';

import { DataPreprocessor } from '../data-preprocessor/data-preprocessor.service';
import { Station } from '../models/station.model';
import { CURRENT_TIME, SCHEDULE_SEPARATOR_HOUR } from '../utils/constants';
import { DeliveryService } from './delivery.sercive';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    constructor (private deliveryService: DeliveryService, private dataPreprocessor: DataPreprocessor) { }

    stations: Station[] = [];
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