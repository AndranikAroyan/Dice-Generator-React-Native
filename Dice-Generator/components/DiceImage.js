import React from 'react';
import { Image, StyleSheet } from 'react-native';

const DiceImage = ({ diceValue, diceImages }) => {
  return <Image source={diceImages[diceValue]} style={styles.diceImage} />;
};

const styles = StyleSheet.create({
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default DiceImage;
