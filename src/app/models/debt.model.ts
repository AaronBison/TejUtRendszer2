export class Debt {
    constructor (
        public debtValue?: number,
        public debtStatus?: DebtStatus,
    ) { }


}

export enum DebtStatus {
    SETTLED = 1,
    UNSETTLED = 0
}
