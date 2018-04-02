import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home';
import OtherScreen from './Other';
import store from './store';


const MainTabNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Other: { screen: OtherScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Other') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  },
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainTabNavigator />
      </Provider>
    );
  }
}
