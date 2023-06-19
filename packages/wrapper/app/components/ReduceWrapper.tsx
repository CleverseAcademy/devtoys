'use client';

import { ReduceToy } from '../array-toys/reduce';
import { ReduceCallbackFunction } from '../array-toys/types/callback.type';

const reducer: ReduceCallbackFunction<
  number,
  [{ [k: number]: number }, [number, number] | null]
> = ([memorizedMap, foundIndices], e, i) => {
  const pair = 36 - e;
  if (pair in memorizedMap) {
    return [memorizedMap, [i, memorizedMap[pair]]];
  }
  memorizedMap[e] = i;
  return [memorizedMap, foundIndices];
};

const ReduceWrapper = () => (
  <ReduceToy
    array={[5, 9, 10, 12, 14, 15, 22]}
    callbackFunc={reducer}
    initialValue={[{}, null]}
  />
);

export default ReduceWrapper;
