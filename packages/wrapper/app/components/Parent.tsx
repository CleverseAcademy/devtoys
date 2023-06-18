'use client';

import { FC, useEffect, useState } from 'react';
import { IChildProps } from '../types';
import { useToysContext, withToy, useToys } from '@devtoys/hook-toys';

const Parent: FC<IChildProps> = ({ children }) => {
  const { useState } = useToys();
  const [n, setN] = useState(1)

  return <div>Parent: {n} {children} <input type="button" onClick={() => setN(n+1)} value="click"/> </div>;
};

export default withToy(Parent, 'parent');
