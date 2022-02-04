import { Injectable } from '@angular/core';
import { CustomerMonthPlan } from '../models/customerMonthPlan.model';
import { DaySchedule } from '../models/daySchedule.model';
import * as sourceJson from './source.json';

@Injectable({ providedIn: 'root' })
export class DataPreprocessor {

    private customerMonthPlan: CustomerMonthPlan[] = [];

    parseSourceToCustomerMonthPlan() {

        Object.entries(sourceJson).forEach((sourceCustomer) => {
            const customerLiterList = sourceCustomer[1];

            let dayScheduleList: DaySchedule[] = [];
            for (let i = 0; i < customerLiterList.length; i += 2) {
                const morningLiter = sourceCustomer[1][i] === null ? 0 : sourceCustomer[1][i] as number;
                const eveningLiter = sourceCustomer[1][i + 1] === null ? 0 : sourceCustomer[1][i + 1] as number;
                dayScheduleList.push(new DaySchedule(morningLiter, eveningLiter));
            }
            let customerMonthPlan = new CustomerMonthPlan(sourceCustomer[0], dayScheduleList);
            this.customerMonthPlan.push(customerMonthPlan);

        });

        console.log(this.customerMonthPlan);

    }
}