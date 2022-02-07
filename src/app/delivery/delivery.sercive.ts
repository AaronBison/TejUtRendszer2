import { Injectable } from '@angular/core';
import { DataPreprocessor } from '../data-preprocessor/data-preprocessor.service';

import { Station } from '../models/station.model';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
    constructor (private dataPreprocessor: DataPreprocessor) {
        this.initializeStations();
    }

    private _stations: Station[] = [];

    get stations() {
        return this._stations;
    }

    initializeStations() {
        const customerMonthScheduleList = this.dataPreprocessor.customerMonthScheduleList
        customerMonthScheduleList.forEach(customerMonthSchedule => {
            const station: Station = new Station(customerMonthSchedule.customerName, customerMonthSchedule.customerMonthlyDebt, customerMonthSchedule.customerDailyLiter)
            if (station.customerLiterToday !== 0) {
                this._stations.push(station);
            }
        });
    }
}