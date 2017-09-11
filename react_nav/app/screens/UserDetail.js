//in LEI app, this should be another list, linking to a drop down for each item


import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { stations } from '../config/data';

class StationDetail extends Component {
  render() {
    const { name, login } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <List>
          {stations.map((station) => (
            <ListItem
              key={station.login.username}

              title={`${station.name.first.toUpperCase()}`}


            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default StationDetail;
