import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hey Detroit Labs!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tap Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
