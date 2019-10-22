import PrayerList from "../Models/PrayerList";
import { IPrayerListAction, PRAYER_LIST_ACTIONS } from "../Actions/PrayerListAction";
import Prayer from "../Models/Prayer";
import { AsyncStorage } from "react-native";

const PrayerListReducer = (state: PrayerList = new PrayerList(), action: IPrayerListAction) => {
    switch (action.type) {
        case PRAYER_LIST_ACTIONS.ADD_PRAYER: {
            const prayers = [
                ...state.prayers,
                action.newState.prayer
            ];
            AsyncStorage.setItem('@prayerTracking', JSON.stringify(prayers));
            return {
                ...state,
                prayers
            } as PrayerList;
        }
        case PRAYER_LIST_ACTIONS.DELETE_PRAYER: {
            let prayers = state.prayers.filter(prayer => prayer.id != action.newState.prayer.id);
            const prayer = {
                ...action.newState.prayer,
                isDeleted: true
            } as Prayer;
            prayers = [...prayers, prayer];
            AsyncStorage.setItem('@prayerTracking', JSON.stringify(prayers));
            return {
                ...state,
                prayers: prayers,
            } as PrayerList;
        }
        case PRAYER_LIST_ACTIONS.FETCHING_PRAYERS: {
            return {
                ...state,
                isFetchingPrayers: action.newState.isFetchingPrayers,
            } as PrayerList;
        }
        case PRAYER_LIST_ACTIONS.FETCHED_PRAYERS: {
            return {
                ...state,
                isFetchingPrayers: false,
                prayers: [...action.newState.prayers],
            } as PrayerList;
        }
        case PRAYER_LIST_ACTIONS.UPDATE_PRAYER: {
            let prayers = state.prayers.filter(prayer => prayer.id != action.newState.prayer.id);
            const prayer = {
                ...action.newState.prayer
            } as Prayer;
            prayers = [...prayers, prayer];
            AsyncStorage.setItem('@prayerTracking', JSON.stringify(prayers));
            return {
                ...state,
                prayers: prayers,
            } as PrayerList;
        }
        default: return state;
    }
}

export default PrayerListReducer;
