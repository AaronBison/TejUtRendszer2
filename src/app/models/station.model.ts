import { DaySchedule } from './daySchedule.model';

export class Station {
    constructor (
        public customerName: string,
        public customerDebt: number,
        private customerScheduleToday: DaySchedule
    ) { }


    get customerLiterToday() {
        const currentTime = new Date();

        const midday = new Date()
        midday.setHours(12);

        return currentTime.getHours() < midday.getHours() ? this.customerScheduleToday.morningLiter : this.customerScheduleToday.eveningLiter
    }
}