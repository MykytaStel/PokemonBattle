import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useAppSelector } from "../../helpers/hooks";

const Statistic = () => {
  const wins = useAppSelector(state => state.entities.battle.wins);
  const loses = useAppSelector(state => state.entities.battle.loses);

  return (
    <SafeAreaView>
      <View>
        <Text>wins</Text>
        <Text>{wins}</Text>
      </View>
      <View>
        <Text>loses</Text>
        <Text>{loses}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Statistic;
