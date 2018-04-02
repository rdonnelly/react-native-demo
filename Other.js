import React from 'react';
import { Platform, SafeAreaView, SectionList, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

export default class OtherScreen extends React.Component {
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
