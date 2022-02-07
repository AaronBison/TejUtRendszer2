import { DebtStatus } from '../utils/enums';

export class Debt {
    constructor (
        public debtValue?: number,
        public debtStatus?: DebtStatus,
    ) { }
}