//take out settings for now

import React, { Component } from 'react';
import { ScrollView, Text, View,  } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { days } from '../config/data2';


class Day extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {days.map((days) => (
            <ListItem
              key={days.login.username}

              title={`${days.name.toUpperCase()}`}
              hideChevron

            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Day;
