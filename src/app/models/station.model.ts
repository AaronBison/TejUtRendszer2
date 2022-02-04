import { CURRENT_TIME } from '../utils/constants';
import { DaySchedule } from './daySchedule.model';

export class Station {
    constructor (
        public customerName: string,
        public customerDebt: number,
        private customerScheduleToday: DaySchedule
    ) { }


    get customerLiterToday() {

        const midday = new Date()
        midday.setHours(12);

        return CURRENT_TIME.getHours() < midday.getHours() ? this.customerScheduleToday.morningLiter : this.customerScheduleToday.eveningLiter
    }
}