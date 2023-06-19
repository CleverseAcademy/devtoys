import { Methods } from './types/methods.enum';
import { ArrayCallbackFunction } from './types/callback.type';

export interface ArrayToysProps<T, M extends Methods, A> {
  array: T[];

  callbackFunc: ArrayCallbackFunction<T, M, A>;
  method: M;
}

export const ArrayToys = <T, M extends Methods, A>({
  array,
  callbackFunc,
  method,
}: ArrayToysProps<T, M, A>) => {
  if (method === Methods.Map) {
    callbackFunc();
  }
};

export default ArrayToys;
