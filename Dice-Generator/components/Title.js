import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return <Text style={styles.title}>🎲 Digital Dice 🎲</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Title;
