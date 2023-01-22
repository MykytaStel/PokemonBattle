import {initialState as loginReducer} from '../screens/LoginScreen/reducer';
import {initialState as battleReducer} from '../screens/BattleScreen/reducers';

export const state = {
  login: loginReducer,
  battle: battleReducer,
};

export type State = typeof state;
