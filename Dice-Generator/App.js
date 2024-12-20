import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title';
import DiceImage from './components/DiceImage';
import DiceValue from './components/DiceValue';
import RollButton from './components/RollButton';
import diceImages from './components/diceimages';

const App = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [lastRolled, setLastRolled] = useState(null);

  const rollDice = () => {
    let randomValue;
    do {
      randomValue = Math.floor(Math.random() * 6) + 1; 
    } while (randomValue === lastRolled); 

    setDiceValue(randomValue);
    setLastRolled(randomValue); 
  };

  return (
    <View style={styles.container}>
      <Title />
      <DiceImage diceValue={diceValue} diceImages={diceImages} />
      <DiceValue value={diceValue} />
      <RollButton onPress={rollDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
});

export default App;
