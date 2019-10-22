import React from 'react';
import { Header, Icon, Button, Divider, Text } from 'react-native-elements';
import { Provider, connect } from 'react-redux';
import Redux from 'redux';
import Store, { IStore } from '../Reducers/Store';
import { NavigationScreenProp } from 'react-navigation';
import Prayer from '../Models/Prayer';
import { SafeAreaView, View } from 'react-native';
import { setIsFullFilled } from '../Actions/PrayerAction';
import { deletePrayer, updatePrayer } from '../Actions/PrayerListAction';

interface IProps {
    dispatch: Redux.Dispatch;
    prayer: Prayer;
    navigation: NavigationScreenProp<any, any>;
}

const mapStateToProps = (state: IStore) => ({
    prayer: {
        ...state.prayer
    }
});

class Page extends React.Component<IProps, any> {
    render() {
        const { prayer, dispatch, navigation } = this.props;
        return (
            <SafeAreaView>
                <Header
                    centerComponent={{ text: 'Viewing Prayer', style: { color: '#fff' } }}
                />
                <View style={{ padding: 15 }}>
                    <Text h4>
                        For: {prayer.requester}
                    </Text>
                    <Text h4>
                        About: {prayer.request}
                    </Text>
                    <Text h4>
                        Reference: {prayer.verse}
                    </Text>
                    <Button
                        icon={<Icon name='check-circle' color='#ffffff' />}
                        style={{ paddingBottom: 5 }}
                        title='Fullfilled'
                        onPress={() => {
                            dispatch(setIsFullFilled(true));
                            prayer.isFullFilled = true;
                            dispatch(updatePrayer(prayer));
                            navigation.navigate('Home');
                        }}
                    />
                    <Divider style={{ margin: 20 }} />
                    <Button
                        icon={<Icon name='delete' color='#ffffff' />}
                        title='Delete'
                        onPress={() => {
                            dispatch(deletePrayer(prayer));
                            navigation.navigate('Home');
                        }}
                    />
                </View>
            </SafeAreaView>

        )
    }
};

const MappedPage = connect(mapStateToProps)(Page);

interface IViewViewProps {
    navigation: NavigationScreenProp<any, any>
}

const ViewView = ({ navigation }: IViewViewProps) => (
    <Provider store={Store}>
        <MappedPage navigation={navigation} />
    </Provider>
);

export default ViewView;
