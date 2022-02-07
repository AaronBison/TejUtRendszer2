import { Injectable } from '@angular/core';

import { DataPreprocessor } from '../data-preprocessor/data-preprocessor.service';
import { CustomerMonthSchedule } from '../models/customerMonthSchedule.model';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
    constructor (private dataPreprocessor: DataPreprocessor) {
        this._stations = this.dataPreprocessor.customerMonthScheduleList;
    }

    private _stations: CustomerMonthSchedule[] = [];

    get stations() {
        return this._stations;
    }

    getRelevantStations() {
        const stations: CustomerMonthSchedule[] = []

        this._stations.forEach(station => {
            if (station.customerLiterToday !== 0) {
                stations.push(station);
            }
        });
        return stations;
    }
}