import { combineReducers, createStore } from "redux";
import Prayer from "../Models/Prayer";
import PrayerList from "../Models/PrayerList";
import PrayerReducer from "./PrayerReducer";
import PrayerListReducer from "./PrayerListReducer";

export interface IStore {
    prayer: Prayer;
    prayerList: PrayerList;
};

const DefaultStore = combineReducers(
    {
        prayer: PrayerReducer,
        prayerList: PrayerListReducer,
    }
);

const Store = createStore(DefaultStore);

export default Store;