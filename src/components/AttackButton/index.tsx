import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

interface Props {
  attack: () => void;
}
const AttackButton = ({attack}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.container} onPress={attack}>
          <Text style={styles.label}>Attack</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 150,
    height: 60,
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#ffd43b',
    padding: 20,
  },
  label: {
    fontSize: 20,
  },
});

export default AttackButton;
