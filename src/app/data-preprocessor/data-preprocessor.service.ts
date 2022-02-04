import { Injectable } from '@angular/core';

import * as sourceJson from './source.json';
import { Customer } from '../models/customer.model';
import { DaySchedule } from '../models/daySchedule.model';

@Injectable({ providedIn: 'root' })
export class DataPreprocessor {

    private _customerList: Customer[] = [];

    set customerList(customerList: Customer[]) {
        this._customerList = customerList;
    }

    addCustomer(customer: Customer) {
        this._customerList.push(customer);
    }

    get customerList(): Customer[] {
        return this._customerList;
    }


    parseSourceToCustomerMonthPlan() {
        Object.entries(sourceJson).forEach((sourceCustomer) => {
            const customerLiterList = sourceCustomer[1];

            let dayScheduleList: DaySchedule[] = [];
            for (let i = 0; i < customerLiterList.length; i += 2) {
                const morningLiter = sourceCustomer[1][i] === null ? 0 : sourceCustomer[1][i] as number;
                const eveningLiter = sourceCustomer[1][i + 1] === null ? 0 : sourceCustomer[1][i + 1] as number;
                dayScheduleList.push(new DaySchedule(morningLiter, eveningLiter));
            }
            let customer = new Customer(sourceCustomer[0], dayScheduleList, []);
            this.addCustomer(customer);
        });
        console.log(this.customerList);

    }

    createCustomer() {

    }
}