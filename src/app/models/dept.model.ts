export class Dept {
    constructor (
        public deptValue?: number,
        public deptStatus?: deptStatusEnum,
    ) { }


}

export enum deptStatusEnum {
    SETTLED = 1,
    UNSETTLED = 0
}
