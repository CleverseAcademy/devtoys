'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useToysContext } from './useToysContext';

export interface IUseToyReturnVal {
  useState: <S>(
    initialState: S | (() => S)
  ) => [S, Dispatch<SetStateAction<S>>];
  // eslint-disable-next-line @typescript-eslint/ban-types
  useToyFunction: (f: Function) => Function;
}

export const useToys = (): IUseToyReturnVal => {
  const { toysTree, storeEvent } = useToysContext();

  const {
    current: {
      currentToy: { current },
    },
  } = toysTree;
  current._currentStateIndex = 0
  const _useState: IUseToyReturnVal['useState'] = (initialState) => {
    const [x, setX] = useState(initialState);
    if (
      ++toysTree.current.currentToy.current._currentStateIndex <
      current.state.length
    ) {
      current.state = [...current.state, x];
    }

    const _setX: typeof setX = (v) => {
      // eslint-disable-next-line @typescript-eslint/ban-types
      const nextX = typeof v === 'function' ? (v as Function)(x) : v;

      if (current.nextState === null) {
        current.nextState = [...current.state];
      }
      current.nextState[current._currentStateIndex] = nextX;

      console.log(toysTree, nextX)
      return setX(v);
    };

    return [x, _setX];
  };

  return {
    useState: _useState,
    useToyFunction: (a) => a,
  };
};
