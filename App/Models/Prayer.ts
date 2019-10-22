import uuid from 'uuid';

export enum REMINDER_SCHEDULE {
    NONE,
    DAILY,
    EVERY_OTHER_DAY,
    WEEKLY
}

export default class Prayer {
    id: string = uuid();
    request: string = '';
    requester: string = '';
    verse: string = '';
    isFullFilled: boolean = false;
    isDeleted: boolean = false;
    dateRequested: Date = new Date();
    reminder: REMINDER_SCHEDULE = REMINDER_SCHEDULE.NONE;
}