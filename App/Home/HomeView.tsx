import React from 'react';
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { createPrayer, setPrayer } from '../Actions/PrayerAction';
import { Provider, connect } from 'react-redux';
import Redux from 'redux';
import Store, { IStore } from '../Reducers/Store';
import PrayerList from '../Models/PrayerList';
import { NavigationScreenProp } from 'react-navigation';
import Prayer from '../Models/Prayer';
import { fetchPrayers } from '../Actions/PrayerListAction';

interface IProps {
  dispatch: Redux.Dispatch;
  prayerList: PrayerList;
  navigation: NavigationScreenProp<any, any>;
}

const mapStateToProps = (state: IStore) => ({
  prayerList: {
    ...state.prayerList
  }
});

class Page extends React.Component<IProps, any> {

  componentDidMount() {
    fetchPrayers(this.props.dispatch);
  }

  createPrayerAndChangeView = () => {
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props;
    dispatch(createPrayer());
    navigate('Add');
  };

  renderItem = (prayer: Prayer) => (
    <ListItem
      title={prayer.request}
      subtitle={prayer.verse}
      onPress={() => {
        this.props.dispatch(setPrayer(prayer));
        this.props.navigation.navigate('View');
      }}
      bottomDivider
      chevron
    />
  );

  getActivePrayers = (): Array<Prayer> => this.props.prayerList.prayers.filter(prayer => !prayer.isDeleted && !prayer.isFullFilled);

  unFullFilledPrayers = (): Array<Prayer> => this.props.prayerList.prayers.filter(prayer => !prayer.isFullFilled);

  fullFilledPrayers = (): Array<Prayer> => this.props.prayerList.prayers.filter(prayer => prayer.isFullFilled);

  render() {
    if (this.props.prayerList.isFetchingPrayers) {
      return (
        <ActivityIndicator />
      );
    }
    const prayers = this.getActivePrayers();
    return (
      <SafeAreaView>
        <Header
          centerComponent={{ text: 'Prayers', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add-circle', style: { color: '#fff' }, onPress: this.createPrayerAndChangeView }}
        />
        <FlatList
          data={prayers}
          renderItem={({ item }) => { return this.renderItem(item); }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const MappedPage = connect(mapStateToProps)(Page);

interface IHomeViewProps {
  navigation: NavigationScreenProp<any, any>
}

const HomeView = ({ navigation }: IHomeViewProps) => (
  <Provider store={Store}>
    <MappedPage navigation={navigation} />
  </Provider>
);

export default HomeView;