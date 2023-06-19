import { Methods } from './methods.enum';

export type ReduceCallbackFunction<E, A> = (
  previousValue: A,
  currentValue: E,
  currentIndex: number,
  array: E[]
) => A;

export type MapCallbackFunction<E, U> = (
  value: E,
  index: number,
  array: E[]
) => U;

export type ArrayCallbackFunction<
  E,
  M extends Methods,
  A
> = M extends Methods.Reduce
  ? ReduceCallbackFunction<E, A>
  : MapCallbackFunction<E, A>;
