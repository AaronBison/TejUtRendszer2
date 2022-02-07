import { DaySchedule } from "./daySchedule.model";
import { Debt } from './debt.model';

export class CustomerMonthSchedule {
    constructor (
        public customerName: string,
        public customerDailyLiter: DaySchedule[],
        public customerMonthlyDebt: Debt
    ) { }
}
