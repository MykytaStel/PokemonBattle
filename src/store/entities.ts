import {combineReducers} from 'redux';
import loginReducer from '../screens/LoginScreen/reducer';
import battleReducer from '../screens/BattleScreen/reducers';

export const state = {
  login: loginReducer,
  battle: battleReducer,
};

export default combineReducers(state);
