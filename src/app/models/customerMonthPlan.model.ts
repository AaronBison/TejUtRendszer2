import { DaySchedule } from './daySchedule.model';

export class CustomerMonthPlan {
    constructor (
        public customerName: string,
        public customerMilkEveryDay: DaySchedule[]
    ) { }
}
