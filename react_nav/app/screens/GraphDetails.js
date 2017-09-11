//take out settings for now


//this should instead be page with buttons on it

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
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme, VictoryGroup, VictoryLabel } from "victory-native";

var prevData;
var compiledData = [];
var cycleData = [];
var tableData = [];
var tableLength = [];

//for graph data, must have x axis (index) and y axis (cycleData)
//push json objects into array with product value as index and amount value as cycleData values
//keep prevData boolean that is true when previously picked station option is same, false when changed
//if false, then clear array and set it to new values
const dataa = [];

var data1 = [
  {product: 6, amount: 0}

];

var data2 = [
  {product: 6, amount: 0}

];

var data3 = [
  {product: 6, amount: 0}

];

var data4 = [
  {product: 6, amount: 0}

];

var data5 = [
  {product: 6, amount: 0}

];

class GraphDetails extends Component {


  //dummyData(length){
    // return => [x-axis - ex. [1, 2, 3, 4] ,
    //            y-axis -ex. ["1", "2", "3", "Total"]]
  //}


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = ['1','2','3','4','1','2','3','4', '1','2','3','4'];
    this.state = {
      listArray: [],
      listArray2: [],
      popoverOneIsOpen: false,
      popoverTwoIsOpen: false,
      data: 'Nothing Selected',
      data2: 'Nothing Selected',
      cycleData: [],
      dataSource: ds.cloneWithRows(data),

    };

  }
  componentDidMount() {
    const listArray = stations.map((station) => `${station.name[0].first.toUpperCase()}`);
    const listArray2 = days.map((days) => `${days.name.toUpperCase()}`);
    this.setState({
      listArray,
      listArray2,
    });
  }

  onLearnMore = () => {
    return this.props.navigation.navigate('GraphDetails');
  };


  render() {
    //initially prevData is false, changes to true when station picked
    prevData = false;
    var currentStation = this.state.data;
    //var test = JSON.parse(stationdetail);
    console.log(currentStation);
    //console.log(test);
    //var cycleData = stationdetail.test.family.list.map((time) => time.cycletime);

    const { fry, grill, oven, pantry, pizzataco,  } = stationdetail;


    if (this.state.data == "FRY") {
      cycleData = fry.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = fry.monday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = fry.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = fry.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = fry.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = fry.friday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = fry.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = fry.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = fry.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;

    }

    if (this.state.data == "GRILL") {
      cycleData = grill.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = grill.monday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = grill.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = grill.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = grill.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = grill.friday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = grill.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = grill.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = grill.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;

    }

    if (this.state.data == "OVEN") {
      cycleData = oven.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = oven.monday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = oven.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = oven.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = oven.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = oven.friday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = oven.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = oven.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = oven.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;
    }


    if (this.state.data == "PANTRY") {
      cycleData = pantry.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = pantry.monday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = pantry.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = pantry.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = pantry.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = pantry.friday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = pantry.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = pantry.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = pantry.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;

    }

    if (this.state.data == "PIZZA/TACO") {
      cycleData = pizzataco.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = pizzataco.monday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = pizzataco.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = pizzataco.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = pizzataco.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = pizzataco.friday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = pizzataco.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = pizzataco.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = pizzataco.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;

    }


    if (this.state.data == "SAUTE") {
      cycleData = saute.family.list.map((time) => time.cycletime);
      if (this.state.data2 == "MONDAY") {
        tableLength = saute.monday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.monday.tableData;
      }
      if (this.state.data2 == "TUESDAY") {
        tableLength = saute.tuesday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.tuesday.tableData;
      }
      if (this.state.data2 == "WEDNESDAY") {
        tableLength = saute.wednesday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.wednesday.tableData;
      }
      if (this.state.data2 == "THURSDAY") {
        tableLength = saute.thursday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.thursday.tableData;
      }
      if (this.state.data2 == "FRIDAY") {
        tableLength = saute.friday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.friday.tableData;
      }
      if (this.state.data2 == "SATURDAY") {
        tableLength = saute.saturday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.saturday.tableData;
      }
      if (this.state.data2 == "SUNDAY") {
        tableLength = saute.sunday.tableData.time.map((halfhour) => halfhour);
        tableData = saute.sunday.tableData;
      }

      console.log(cycleData);
      console.log("tableData is", tableData);
      prevData = true;

    }

    if (prevData) {
      dataa.splice(0, dataa.length);
      compiledData.splice(0, compiledData.length);
      for (var i = 0; i < cycleData.length; i++) {
        dataa.push({product: i+1, amount: cycleData[i]});
        compiledData.push([{product: cycleData.length+1, amount: cycleData[i]}]);
      }
      console.log("new data is", dataa);
      console.log("compiled data is", compiledData);
    }

    var victoryBarList = [];
    var tableLayout = [];

    for (var k = 0; k < cycleData.length; k++) {
      victoryBarList.push(<VictoryBar
        data={compiledData[k]}
        x="product"
        y="amount"
        key={k}
      />);
    }

    for (var l = 0; l < tableLength.length; l++) {
      tableLayout.push(
          <View style={styles.peakTextStyle}>
            <View style={styles.hCS}>
              <Text>{tableData.time[l]}</Text>
            </View>

            <View style={styles.hCS}>
              <Text>{tableData.units[l]}</Text>
            </View>

            <View style={styles.hCS}>
              <Text>{tableData.rate[l]}</Text>
            </View>
          </View>
        );

    }

    return (
      <View>
      <ScrollView>

              <VictoryChart
                domainPadding={40}
                theme={VictoryTheme.material}
              >
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6]}
                tickFormat={["1", " 2", " 3", "4", "5", "Total"]}
                label="Product Families"
                style={{
                  axisLabel: {fontSize: 12, padding: 30},
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}`)}
                style={{
                  axisLabel: {fontSize: 12, padding: 30},
                }}
              />

              <VictoryLabel x={25} y={30}
          text={"Time \n (sec)"}
        />

              <VictoryGroup>
                <VictoryBar
                  style={{
                  data: {fill: "blue"}
                  }}
                  data={dataa}
                  x="product"
                  y="amount"
                  labels={(dataa) => dataa.amount}
                />

                <VictoryStack
                  padding={40}
                  xOffset={10}
                >

                {victoryBarList}

                </VictoryStack>
              </VictoryGroup>

            </VictoryChart>

            <View>

            </View>


        <List>
          <ListItem
            title="Peak Periods"
            hideChevron
          />

          <View style={styles.peakTextStyle}>
            <View style={styles.hCS}>
              <Text>Time</Text>
            </View>

            <View style={styles.hCS}>
              <Text>Units</Text>
            </View>

            <View style={styles.hCS}>
              <Text>Rate of Order</Text>
            </View>
          </View>
        </List>

        <List>
          {tableLayout}
        </List>










      </ScrollView>

      <ListView
      style = {styles.listStyle}
      contentContainerStyle={styles.list}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
    />

    </View>
    );
  }
}

GraphDetails.defaultProps = { ...me };

const styles = StyleSheet.create({
  allContents: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    padding: 10
  },
  content: {
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingTop: 10
    },
  titleBox: {
    backgroundColor: '#ADD8E6',
    width: 200,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  },
  titleBoxText: {
    color: '#fff',
    fontSize: 16
  },
  peakTextStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10
  },
  hCS: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    padding: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#444444',
    margin: 5,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        backgroundColor: '#D3D3D3',
        margin: 3,
        width: 108
    },
    listStyle: {
      padding: 15
    },
    headerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },

  });

export default GraphDetails;
