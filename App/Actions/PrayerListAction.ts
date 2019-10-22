import * as Redux from 'redux';
import Prayer from '../Models/Prayer';
import { AsyncStorage } from 'react-native';

export enum PRAYER_LIST_ACTIONS {
    ADD_PRAYER = 'ADD_PRAYER',
    DELETE_PRAYER = 'DELETE_PRAYER',
    FETCHING_PRAYERS = 'FETCHING_PRAYERS',
    FETCHED_PRAYERS = 'FETCHED_PRAYERS',
    UPDATE_PRAYER = 'UPDATE_PRAYER',
}

export interface IPrayerListAction extends Redux.Action {
    type: PRAYER_LIST_ACTIONS,
    newState?: any
};

export const addPrayer = (prayer: Prayer): IPrayerListAction => ({
    type: PRAYER_LIST_ACTIONS.ADD_PRAYER,
    newState: {
        prayer
    }
});

export const deletePrayer = (prayer: Prayer): IPrayerListAction => ({
    type: PRAYER_LIST_ACTIONS.DELETE_PRAYER,
    newState: {
        prayer
    }
});

const setFetchingPrayers = (): IPrayerListAction => ({
    type: PRAYER_LIST_ACTIONS.FETCHING_PRAYERS,
    newState: {
        isFetchingPrayers: true
    }
});

const setFetchedPrayers = (prayers: Prayer[]): IPrayerListAction => ({
    type: PRAYER_LIST_ACTIONS.FETCHED_PRAYERS,
    newState: {
        prayers
    }
})

export const fetchPrayers = async (dispatch: Redux.Dispatch) => {
    dispatch(setFetchingPrayers());
    const jsonPrayers = await AsyncStorage.getItem('@prayerTracking');
    const prayers = JSON.parse(jsonPrayers || '[]');
    if (prayers.indexOf) {
        dispatch(setFetchedPrayers(prayers));
    } else {
        dispatch(setFetchedPrayers([]));
    }
};

export const updatePrayer = (prayer: Prayer): IPrayerListAction => ({
    type: PRAYER_LIST_ACTIONS.UPDATE_PRAYER,
    newState: {
        prayer
    }
})