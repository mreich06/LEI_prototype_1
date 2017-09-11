import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Modal,
  ListView,
} from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
import { Buttons } from '../components/Buttons';
import { ListviewModal, ListviewModalBtn } from './ListViewModal';
import { stationdetail, stations } from '../config/data';
import { days } from '../config/data2';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme, VictoryGroup, VictoryLabel, VictoryScatter} from "victory-native";


class CatPoint extends Component {
  render() {
    const {x, y, datum} = this.props;
    const cat = datum._y >= 0 ? "😻" : "😹";
    return (
      <Text x={x} y={y} fontSize={30}>
        {cat}
      </Text>
    );
  }
}

export default CatPoint;
