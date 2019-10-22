import * as Redux from 'redux';
import uuid from 'uuid';
import Prayer, { REMINDER_SCHEDULE } from '../Models/Prayer';

export enum PRAYER_ACTIONS {
    CREATE_PRAYER = 'CREATE_PRAYER',
    SET_REQUEST = 'SET_REQUEST',
    SET_REQUESTER = 'SET_REQUESTER',
    SET_VERSE = 'SET_VERSE',
    SET_IS_FULLFILLED = 'SET_IS_FULLFILLED',
    SET_REMINDER_SCHEDULE = 'SET_REMINDER_SCHEDULE',
    SET_PRAYER = 'SET_PRAYER',
}

export interface IPrayerAction extends Redux.Action {
    type: PRAYER_ACTIONS,
    newState?: any
};

export const createPrayer = (): IPrayerAction => {
    const newPrayer = new Prayer();
    newPrayer.id = uuid();
    newPrayer.isFullFilled = false;
    newPrayer.dateRequested = new Date();
    return {
        type: PRAYER_ACTIONS.CREATE_PRAYER,
        newState: {
            prayer: newPrayer
        }
    };
};

export const setRequest = (request: string): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_REQUEST,
    newState: {
        request
    }
});

export const setRequester = (requester: string): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_REQUESTER,
    newState: {
        requester
    }
});

export const setVerse = (verse: string): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_VERSE,
    newState: {
        verse
    }
});

export const setIsFullFilled = (isFullFilled: boolean): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_IS_FULLFILLED,
    newState: {
        isFullFilled
    }
});

export const setReminder = (reminder: REMINDER_SCHEDULE): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_REMINDER_SCHEDULE,
    newState: {
        reminder
    }
});

export const setPrayer = (prayer: Prayer): IPrayerAction => ({
    type: PRAYER_ACTIONS.SET_PRAYER,
    newState: {
        prayer
    }
});