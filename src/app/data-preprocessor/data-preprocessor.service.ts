import { Injectable } from '@angular/core';

import * as sourceJson from './source.json';
import { CustomerMonthSchedule } from '../models/customerMonthSchedule.model';
import { DaySchedule } from '../models/daySchedule.model';
import { Debt } from '../models/debt.model';
import { DebtStatus } from '../utils/enums';

@Injectable({ providedIn: 'root' })
export class DataPreprocessor {
    constructor () {
        this.parseSourceToCustomerMonthPlan();
    }

    private _customerMonthScheduleList: CustomerMonthSchedule[] = [];

    set customerMonthScheduleList(customerList: CustomerMonthSchedule[]) {
        this._customerMonthScheduleList = customerList;
    }

    addCustomer(customerMonthSchedule: CustomerMonthSchedule) {
        this._customerMonthScheduleList.push(customerMonthSchedule);
    }

    get customerMonthScheduleList(): CustomerMonthSchedule[] {
        return this._customerMonthScheduleList;
    }


    parseSourceToCustomerMonthPlan() {
        Object.entries(sourceJson).forEach((sourceCustomer) => {
            const customerLiterList = sourceCustomer[1];

            let dayScheduleList: DaySchedule[] = [];
            for (let i = 0; i < customerLiterList.length - 2; i += 2) {
                const morningLiter = sourceCustomer[1][i] === null ? 0 : sourceCustomer[1][i] as number;
                const eveningLiter = sourceCustomer[1][i + 1] === null ? 0 : sourceCustomer[1][i + 1] as number;
                dayScheduleList.push(new DaySchedule(morningLiter, eveningLiter));
            }

            const customerDeptValue = sourceCustomer[1][customerLiterList.length - 1] as number;
            const customerDept: Debt = new Debt(customerDeptValue, DebtStatus.UNSETTLED);

            let customerMonthSchedule = new CustomerMonthSchedule(sourceCustomer[0], dayScheduleList, customerDept);
            this.addCustomer(customerMonthSchedule);
        });
        this._customerMonthScheduleList.pop();
    }
}