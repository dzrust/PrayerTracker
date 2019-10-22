import Prayer from "../Models/Prayer";
import { IPrayerAction, PRAYER_ACTIONS } from "../Actions/PrayerAction";

const PrayerReducer = (state: Prayer = new Prayer(), action: IPrayerAction) => {
    switch(action.type) {
        case PRAYER_ACTIONS.CREATE_PRAYER: {
            return {
                ...state,
                ...action.newState.prayer
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_IS_FULLFILLED: {
            return {
                ...state,
                isFullFilled: action.newState.isFullFilled,
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_REMINDER_SCHEDULE: {
            return {
                ...state,
                reminder: action.newState.reminder,
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_REQUEST: {
            return {
                ...state,
                request: action.newState.request,
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_REQUESTER: {
            return {
                ...state,
                requester: action.newState.requester,
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_VERSE: {
            return {
                ...state,
                verse: action.newState.verse,
            } as Prayer;
        }
        case PRAYER_ACTIONS.SET_PRAYER: {
            return {
                ...state,
                ...action.newState.prayer
            } as Prayer;
        }
        default: return state;
    }
}

export default PrayerReducer;
