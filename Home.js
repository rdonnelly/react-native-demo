import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { incrementCount } from './store/counter/actions';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={ this.props.incrementCount }
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
        onPress={ this.props.incrementCount }
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
        <Text style={ styles.text }>{ this.props.count }</Text>
        { this.renderButton() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


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
