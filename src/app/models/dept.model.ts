export class Dept {
    constructor (
        public deptValue?: number,
        public deptStatus?: deptStatusEnum,
    ) { }


}

enum deptStatusEnum {
    Settled = 1,
    Unsettled = 0
}
