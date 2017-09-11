import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription = (station) => {
    const { station } = this.props;

      return (
        <View>
          <Text style={{ flex: 1 }}>{station.login.username}</Text>
        </View>
      );

  };
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => this.renderDescription(station))}>
      <View>
    
          <Text style={titleStyle}>
            {title}
          </Text>

        {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default connect(mapStateToProps, actions)(ListItem);
