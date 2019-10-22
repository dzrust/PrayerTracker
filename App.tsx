import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeView from './App/Home/HomeView';
import AddView from './App/Add/AddView';
import ViewView from './App/View/ViewView';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeView
  },
  Add: {
    screen: AddView
  },
  View: {
    screen: ViewView
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);

export default App;