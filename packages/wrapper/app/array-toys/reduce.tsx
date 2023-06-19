'use client';

import * as _ from 'lodash';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HighLightKV, { IHightLightKVProps } from './HighLightKV';
import { ReduceCallbackFunction } from './types/callback.type';

export interface IReduceToyProps<T, A> {
  array: T[];

  callbackFunc: ReduceCallbackFunction<T, A>;
  initialValue: A;
}

export const ReduceToy = <T, A>({
  array,
  callbackFunc,
  initialValue,
  sourceCode,
}: IReduceToyProps<T, A>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAccumulator, setAccumulator] = useState<A>(initialValue);

  const currentElement = array[currentIndex];
  const nextAcc = callbackFunc(
    _.cloneDeep(currentAccumulator),
    _.cloneDeep(currentElement),
    currentIndex,
    array
  );

  const nextIteration = () => {
    setAccumulator(nextAcc);
    setCurrentIndex(currentIndex + 1);
  };

  const isOverflow = currentIndex >= array.length - 1;

  const ArgsList: IHightLightKVProps[] = [
    {
      name: 'acc',
      value: JSON.stringify(currentAccumulator),
    },
    {
      name: 'e',
      value: `${currentElement}`,
    },
    {
      name: 'i',
      value: `${currentIndex}`,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-8">
        {ArgsList.map((props) => (
          <HighLightKV key={props.name} {...props} />
        ))}
      </div>
      <SyntaxHighlighter language="javascript" style={docco}>
        {`${callbackFunc}`.replace(/param/g, 'acc')}
      </SyntaxHighlighter>
      <h1 className="text-xl py-4 font-code">{`=> ${JSON.stringify(
        nextAcc
      )}`}</h1>
      <div className="w-full flex justify-evenly mt-4">
        {array.map((e, i) => (
          <h1
            className={`${
              i === currentIndex && 'bg-purple-700 text-white'
            } px-4 text-lg`}
            key={`reduce-${i}-${e}`}
          >{`${e}`}</h1>
        ))}
      </div>
      <button
        className={`h-12 px-6 ${isOverflow ? 'bg-slate-500' : 'bg-lime-400'}`}
        onClick={nextIteration}
        disabled={isOverflow}
      >
        Next
      </button>
    </div>
  );
};
