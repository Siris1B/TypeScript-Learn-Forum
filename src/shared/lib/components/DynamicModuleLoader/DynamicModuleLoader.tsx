import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children?: React.ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([reducerKey, reducer]: ReducerListEntry) => {
        store.reducerManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      },
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([reducerKey, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(reducerKey);
            dispatch({ type: `@DESTROY ${reducerKey} reducer` });
          },
        );
      }
    };

    // eslint-disable-next-line
  }, []);
  return <>{children}</>;
};
