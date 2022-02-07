import { CURRENT_TIME, SCHEDULE_SEPARATOR_HOUR } from '../utils/constants';
import { DaySchedule } from './daySchedule.model';
import { Debt } from './debt.model';

export class Station {
    constructor (
        public customerName: string,
        public customerDebt: Debt,
        private customerScheduleThisMonth: DaySchedule[]
    ) { }


    get customerLiterToday() {

        const midday = new Date()
        midday.setHours(SCHEDULE_SEPARATOR_HOUR);

        const TODAY = CURRENT_TIME.getDate() - 1;

        return CURRENT_TIME.getHours() < midday.getHours() ? this.customerScheduleThisMonth[TODAY].morningLiter : this.customerScheduleThisMonth[TODAY].eveningLiter
    }
}