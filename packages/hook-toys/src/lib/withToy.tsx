"use client";
import { ComponentType } from 'react';
import { ToysTree, ToyType, Toy } from '../types/ToysTree.type';
import { useToysContext } from './useToysContext';



export const withToy = <P extends object>(LoC: ComponentType<P>, id: string): ComponentType<P> => {
  return (props: P) => {
    const { toysTree: ref } = useToysContext();
    const {
      current: { currentToy, toyTreeContext },
    } = ref;

    const childIndex = currentToy.children?.findIndex((t) => t.id === id) ?? -1;
    if (childIndex === -1) {
      const childToy: Toy = {
        props,
        previousProps: null,
        state: [],
        nextState: null,
        type: ToyType.ClientComponent,
        _currentStateIndex: 0
      };

      const childToyNode: ToysTree = {
        id,
        children: null,
        current: childToy,
        parent: currentToy,
      };

      currentToy.children = [childToyNode];

      ref.current.currentToy = childToyNode;
    } else {
      ref.current.currentToy = currentToy.children![childIndex];
    }

    console.log(ref.current.currentToy)
    return <LoC {...props} />;
  };
};
