import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import {
  MountedReducersType,
  ReducerManager,
  StateSchema,
  StateSchemaKey,
} from './StateSchema';

type CombinedReducer = Reducer<StateSchema, AnyAction>;

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers) as CombinedReducer;

  let keysToRemove: Array<StateSchemaKey> = [];
  const mountedReducers: MountedReducersType = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers) as CombinedReducer;
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);
      mountedReducers[key] = false;
      combinedReducer = combineReducers(reducers) as CombinedReducer;
    },
  };
}
