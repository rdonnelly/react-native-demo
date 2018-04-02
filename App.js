import React from 'react';
import { Platform, SafeAreaView, SectionList, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  incrementCounter() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  renderButton() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={ this.incrementCounter }
          background={ TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.5)', false) }
        >
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Tap Me</Text>
          </View>
      </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity
        onPress={ this.incrementCounter }
        style={ styles.button }
      >
        <Text style={ styles.buttonText }>Tap Me</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Hey Detroit Labs!</Text>
        <Text style={ styles.text }>{ this.state.counter }</Text>
        { this.renderButton() }
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        { title: 'A', data: ['Aaron', 'Ace']},
        { title: 'B', data: ['Beilein', 'Brian']},
        { title: 'C', data: ['Charles', 'Chani']},
        { title: 'D', data: ['Devin', 'Duncan']},
        { title: 'E', data: ['Emma']},
        { title: 'F', data: ['Frank']},
        { title: 'J', data: ['Jackson', 'James', 'Jeff', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
        { title: 'K', data: ['Ki'] },
        { title: 'L', data: ['Lucas', 'Luke'] },
        { title: 'M', data: ['Maggie'] },
        { title: 'O', data: ['Owen'] },
        { title: 'P', data: ['Paul'] },
        { title: 'R', data: ['Ryan'] },
        { title: 'T', data: ['Toby'] },
        { title: 'V', data: ['Victor'] },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.listContainer}>
        <SectionList
          sections={ this.state.sections }
          renderItem={ ({item}) => <Text style={styles.item}>{item}</Text> }
          renderSectionHeader={ ({section}) => <Text style={styles.sectionHeader}>{section.title}</Text> }
          keyExtractor={ (item, index) => index }
        />
      </SafeAreaView>
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
  listContainer: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#eeeeee',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  item: {
    fontSize: 20,
    height: 44,
    padding: 10,
  },
});
