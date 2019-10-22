import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingButtonContainer: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    flatList: {
        flex: 1,
        minHeight: "100%"
    },
    flatListItem: {
        backgroundColor: '#fff',
        borderColor: "#eee",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    prayerRequest: {
        fontSize: 32,
    },
    prayerRequester: {
        fontSize: 32,
    },
    prayerVerse: {
        fontSize: 32,
    },
});

export default HomeStyles;