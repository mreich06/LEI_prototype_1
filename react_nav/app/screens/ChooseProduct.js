//take out settings for now

import React, { Component } from 'react';
import { ScrollView, Text, View,  } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { stations } from '../config/data';


class ChooseProduct extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {stations.map((station) => (
            <ListItem
              key={station.login.username}

              title={`${station.name.first.toUpperCase()}`}
              hideChevron

            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default ChooseProduct;
