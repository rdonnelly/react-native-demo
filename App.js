import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hey Detroit Labs!</Text>
        <Text style={styles.text}>{ this.state.counter }</Text>
        <TouchableOpacity
          onPress={ this.incrementCounter }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Tap Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Other Stuff!</Text>
      </View>
    );
  }
}

export default TabNavigator(
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 42,
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
