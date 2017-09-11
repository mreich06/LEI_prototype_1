//in LEI app, this should be another list, linking to a drop down for each item


import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { stations } from '../config/data';

class StationDetail extends Component {
  onLearnMore = (category) => {
    return this.props.navigation.navigate('FamilyDetails', { ...category });
  };

  render() {
  const { name, family, login, id } = this.props.navigation.state.params;
  return (
    <ScrollView>
    <View style= {styles.headerBoxStyle}>
      <Text style={styles.headerTextStyle}>Product Families</Text>
    </View>
      <List>
      {name[1].family.list.map((category) => (
        <ListItem

          title={category.name.toUpperCase()}
          onPress={() => this.onLearnMore(category)}
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

export default StationDetail;
