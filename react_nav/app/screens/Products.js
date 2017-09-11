//get rid of photos and description- this is coming from users in config/data
//make new file for list of product families to put in

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { stations } from '../config/data';

class Products extends Component {
  //onLearnMore is called when we tap on user in Feed List
  //it is passed the user so that person's data is passed to function
  //whenever you define screen and pass component to it, that comp has this.props.navigation coming from StackNavigator or TabNavigator
  //navigate() is used to progress between different screens
  //first param is key of screen we want to go to and any params we want to pass, so we pass user data so we can generate user data
  onLearnMore = (station) => {
    this.props.navigation.navigate('Details', { ...station });
  };

  render() {
    return (
      <ScrollView>
      <View style= {styles.headerBoxStyle}>
        <Text style={styles.headerTextStyle}>Stations</Text>
      </View>
        <List>
          {stations.map((station) => (
            <ListItem
              key={station.login.username}

              title={`${station.name[0].first.toUpperCase()}`}

              onPress={() => this.onLearnMore(station)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerBoxStyle: {
    backgroundColor: '#ADD8E6'
  },
  headerTextStyle: {
    fontSize: 15,
    padding: 10
  }


});

export default Products;
