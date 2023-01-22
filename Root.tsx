import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import BattleScreen from './src/screens/BattleScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Statistic from './src/screens/Statistic';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BattleScreen"
          //@ts-ignore
          component={BattleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statistic"
          //@ts-ignore
          component={Statistic}
        />
      </Stack.Navigator>
    </Provider>
  );
};
export default Root;
