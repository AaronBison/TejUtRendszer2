import { DaySchedule } from "./daySchedule.model";

export class Customer {
    constructor(
    public customerName: string,
    public customerMonthlyDebt: number[],
    public customerDailyLiter: DaySchedule[]
    ){}
}
