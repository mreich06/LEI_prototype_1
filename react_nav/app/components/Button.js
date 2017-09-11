import React from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';
const Button = () => (
  <TouchableHighlight style={styles.container}>
    <Text style={styles.button}>Click Me</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
button: {
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: 5,
    padding: 15,
  }

  });

export default Button;
