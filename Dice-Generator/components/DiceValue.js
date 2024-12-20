import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DiceValue = ({ value }) => {
  return <Text style={styles.diceValue}>{value}</Text>;
};

const styles = StyleSheet.create({
  diceValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 20,
  },
});

export default DiceValue;
