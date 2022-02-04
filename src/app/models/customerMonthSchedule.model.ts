import { DaySchedule } from "./daySchedule.model";
import { Dept } from './dept.model';

export class CustomerMonthSchedule {
    constructor (
        public customerName: string,
        public customerDailyLiter: DaySchedule[],
        public customerMonthlyDebt: Dept
    ) { }
}
