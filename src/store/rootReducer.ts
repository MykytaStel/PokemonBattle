import {CombinedState, combineReducers} from 'redux';
import entitiesReducer from './entities';
import type {State} from './initialState';

const entities = combineReducers({
  entities: entitiesReducer,
});

export interface IAction<
  ActionType extends string,
  PayloadType extends Record<string, unknown>,
> {
  type: ActionType;
  payload: PayloadType;
}

type TState = CombinedState<{entities: CombinedState<State>}>;

const rootReducer = (
  state: TState,
  action: IAction<string, Record<string, unknown>>,
) => {
  return entities(state, action);
};

export default rootReducer;
