//router.js is where we put all of our navigation elements and styling

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//import relevant screens
import Products from '../screens/Products';
import ChooseProduct from '../screens/ChooseProduct';
import Day from '../screens/Day';
import StationDetail from '../screens/StationDetail';
import FamilyDetails from '../screens/FamilyDetails';
import Me from '../screens/Me';
import GraphDetails from '../screens/GraphDetails';

export const ProductsStack = StackNavigator({
  Products: {
    screen: Products,
    navigationOptions: {
      title: 'Products',
    },
  },
  Details: {
    screen: StationDetail,
    navigationOptions: ({ navigation }) => ({
      //insetad of using static name, we can make it the name of the user we pick
      title: `${navigation.state.params.name[0].first.toUpperCase()}`,
    }),
  },
  FamilyDetails: {
    screen: FamilyDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Family',
    }),
  }
});

//takes object as paramteter- takes a bunch of key and value pairs,
//each key represents screen
//within each object, we define screen- component that should be rendered for that tab
export const Tabs = TabNavigator({
  Products: {
    screen: ProductsStack,
    navigationOptions: {
      tabBarLabel: 'Products', //shows up as title of tab
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />, //color is what it is when currently active
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Staffing',
      title: 'Staffing',
      tabBarIcon: ({ tintColor }) => <Icon name="bar-chart" size={35} color={tintColor} />
    },
  },
});

export const ChooseProductStack = StackNavigator({
  ChooseProduct: {
    screen: ChooseProduct,
    navigationOptions: {
      title: 'Choose Product',
    },
  },
});

export const DayStack = StackNavigator({
  Day: {
    screen: Day,
    navigationOptions: {
      title: 'Choose Day',
    },
  },
});

export const GraphStack = StackNavigator({
  GraphDetails: {
    screen: GraphDetails,
    navigationOption: {
      title: 'Graph Detail',
    },
  },
});

//this is our root navigator
//tabs is the screen that we see when we are going to click modal
//settings is the modal screen on top of tabs
//once we go to index.js and make Root the only component, Tabs should be the main screen that
//shows up because it is the first key in Root
export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  ChooseProduct: {
    screen: ChooseProductStack,
  },
  Day: {
    screen: DayStack,
  },
  GraphDetails: {
    screen: GraphStack,
  },
}, {
  mode: 'modal', //to bring screens from bottom to top
  headerMode: 'none',
});
