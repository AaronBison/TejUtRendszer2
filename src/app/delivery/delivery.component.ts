import { Component, OnInit } from '@angular/core';
import { DataPreprocessor } from '../data-preprocessor/data-preprocessor.service';

import { Station } from '../models/station.model';
import { DeliveryService } from './delivery.sercive';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    constructor (private deliveryService: DeliveryService, private dataPreprocessor: DataPreprocessor) { }

    stations: Station[] = [];

    ngOnInit(): void {
        this.stations = this.deliveryService.stations;
        this.dataPreprocessor.parseSourceToCustomerMonthPlan();
    }

}