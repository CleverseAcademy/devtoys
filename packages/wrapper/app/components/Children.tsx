'use client';

import { useToysContext, withToy } from '@devtoys/hook-toys';
import { useEffect } from 'react';

const Children = () => {
  const {
    toysTree: {
      current: { currentToy },
    },
  } = useToysContext();
  console.log(currentToy)
  return <h1>children</h1>;
};

export default withToy(Children, 'Child');
