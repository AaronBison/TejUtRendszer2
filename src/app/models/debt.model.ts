export class Debt {
    constructor (
        public debtValue?: number,
        public debtStatus?: debtStatusEnum,
    ) { }


}

export enum debtStatusEnum {
    SETTLED = 1,
    UNSETTLED = 0
}
