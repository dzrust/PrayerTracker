import React from "react";
import { Text, SafeAreaView, Picker, Button } from "react-native";
import { Input, Header } from "react-native-elements";
import AddStyles from "./AddStyles";
import Redux from "redux";
import Prayer, { REMINDER_SCHEDULE } from "../Models/Prayer";
import { NavigationScreenProp } from "react-navigation";
import Store, { IStore } from "../Reducers/Store";
import { Provider, connect } from "react-redux";
import { setRequest, setRequester, setVerse, setReminder } from "../Actions/PrayerAction";
import { addPrayer } from "../Actions/PrayerListAction";

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

  addPrayer = () => {
    const { prayer, dispatch, navigation } = this.props;
    if (!prayer.request) {
      alert("You need to add a request atleast");
      return;
    }
    dispatch(addPrayer(prayer));
    navigation.navigate("Home");
  }

  render() {
    const { prayer, dispatch } = this.props;
    return (
      <SafeAreaView style={AddStyles.container}>
        <Header
          centerComponent={{ text: "Add A Prayer", style: { color: "#fff" } }}
        />
        <Input
          placeholder="What's the request"
          onChangeText={(text: string) => dispatch(setRequest(text))}
          value={prayer.request}
        />
        <Input
          placeholder="Who is it for"
          onChangeText={(text: string) => dispatch(setRequester(text))}
          value={prayer.requester}
        />
        <Input
          placeholder="Verse associated"
          onChangeText={(text: string) => dispatch(setVerse(text))}
          value={prayer.verse}
        />
        <Text style={AddStyles.inputHeader}>Prayer Reminder</Text>
        <Picker
          selectedValue={prayer.reminder}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue) =>
            dispatch(setReminder(itemValue))
          }>
          <Picker.Item label="None" value={REMINDER_SCHEDULE.NONE} />
          <Picker.Item label="Daily" value={REMINDER_SCHEDULE.DAILY} />
          <Picker.Item label="Every Other Day" value={REMINDER_SCHEDULE.EVERY_OTHER_DAY} />
          <Picker.Item label="Weekly" value={REMINDER_SCHEDULE.WEEKLY} />
        </Picker>

        <Button
          title="Add Prayer"
          onPress={this.addPrayer}
        />
      </SafeAreaView>
    );
  }
};

const MappedPage = connect(mapStateToProps)(Page);

interface ICreateViewProps {
  navigation: NavigationScreenProp<any, any>
}

const AddView = ({ navigation }: ICreateViewProps) => (
  <Provider store={Store}>
    <MappedPage navigation={navigation} />
  </Provider>
);

export default AddView;
