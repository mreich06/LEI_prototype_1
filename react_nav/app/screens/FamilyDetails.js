//in LEI app, this should be another list, linking to a drop down for each item


import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { stations } from '../config/data';

const list = [
  "Steamers", "Sauteed Mussels", "Legals' Signature Crab Cake", "Smoked Salmon", "Bang Bang Califlower", "Kung Pao Chicken Wings", "Sea Scallops", "Sauteed Kale",
  "Haddock", "Tuna Burger", "Salmon Burger", "Legal's Crab Cake", "Jasmine Special"
];
class FamilyDetails extends Component {

  render() {
    const { name, cycletime, menuitems } = this.props.navigation.state.params;
  return (
    <ScrollView>
    <View style= {styles.headerBoxStyle}>
      <Text style={styles.headerTextStyle}>{name.toUpperCase()}</Text>
    </View>

    <List>
    <ListItem
    title="Cycle Time"
    rightTitle= {cycletime}
    hideChevron
    />
    <ListItem
    title="Menu Items"
    hideChevron
    />
    <Text style={styles.listHeaderTextStyle}>{menuitems}</Text>
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
  },
  listHeaderTextStyle: {
    fontSize: 15,
    paddingLeft: 25,
    paddingTop: 5,
    color: 'gray'
  }


});

export default FamilyDetails;
