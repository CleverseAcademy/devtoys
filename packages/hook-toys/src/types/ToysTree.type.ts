'use client';

import { MutableRefObject } from 'react';

export interface State {
  value: unknown
  name?: string
}

export enum ToyType {
  DefaultRoot,
  ClientComponent,
}

export interface Toy {
  type: ToyType;
  _currentStateIndex: number;
  state: unknown[];
  nextState: unknown[] | null;
  props: object;
  previousProps: object | null;
}
export interface ToysTree {
  id: string;
  parent: ToysTree | null;
  current: Toy;
  children: ToysTree[] | null;
}

export interface ToysTreeRef {
  toyTreeContext: ToysTree | null;
  currentToy: ToysTree;
}
