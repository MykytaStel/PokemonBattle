import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  playerAttackTxt: string;
  enemyAttackTxt: string;
  enemyDraw: number;
}
const AttackText = ({playerAttackTxt, enemyAttackTxt, enemyDraw}: Props) => {
  const enemyTxtMoreThanSix =
    enemyDraw === 6 && 'Enemy roll 6, prepare for the double attack!';
  return (
    <View style={styles.container}>
      <Text style={styles.alertTxt}>{enemyTxtMoreThanSix} </Text>
      <Text style={[styles.text, styles.playerAttackTxt]}>
        {playerAttackTxt}
      </Text>
      <Text style={[styles.text, styles.enemyAttackTxt]}>{enemyAttackTxt}</Text>
    </View>
  );
};

export default AttackText;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'column',
  },
  playerAttackTxt: {
    color: 'green',
  },
  enemyAttackTxt: {
    color: 'blue',
  },
  text: {
    fontSize: 18,
  },
  alertTxt: {
    color: 'red',
    fontSize: 26,
  },
});
