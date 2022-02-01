import { Injectable } from '@angular/core';
import { DaySchedule } from '../models/daySchedule.model';

import { Station } from '../models/station.model';

@Injectable({ providedIn: 'root' })
export class DeliveryService {

    private _stations: Station[] = [
        new Station('Csóka', 56, { morningLiter: 0, eveningLiter: 2 }),
        new Station('Karcsi', 140, { morningLiter: 0, eveningLiter: 4 }),
        new Station('Bence Attila', 64, { morningLiter: 2, eveningLiter: 0 }),
        new Station('5/A/15', 140, { morningLiter: 0, eveningLiter: 5 }),
        new Station('Dezső', 70, { morningLiter: 2.5, eveningLiter: 0 }),
        new Station('Balázs Anna', 112, { morningLiter: 4, eveningLiter: 0 }),
    ];

    get stations() {
        return this._stations;
    }
}