import { Injectable } from '@angular/core';

import * as sourceJson from './source.json';
import { CustomerMonthSchedule } from '../models/customerMonthSchedule.model';
import { DaySchedule } from '../models/daySchedule.model';
import { Dept, deptStatusEnum } from '../models/dept.model';

@Injectable({ providedIn: 'root' })
export class DataPreprocessor {

    private _customerList: CustomerMonthSchedule[] = [];

    set customerList(customerList: CustomerMonthSchedule[]) {
        this._customerList = customerList;
    }

    addCustomer(customer: CustomerMonthSchedule) {
        this._customerList.push(customer);
    }

    get customerList(): CustomerMonthSchedule[] {
        return this._customerList;
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
            console.log(sourceCustomer[1][customerLiterList.length - 1]);

            const customerDeptValue = sourceCustomer[1][customerLiterList.length - 1] as number;
            const customerDept: Dept = new Dept(customerDeptValue, deptStatusEnum.UNSETTLED);

            let customer = new CustomerMonthSchedule(sourceCustomer[0], dayScheduleList, customerDept);
            this.addCustomer(customer);
        });
        console.log(this.customerList);

    }
}