'use client';
import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import { ToysTree, ToyType, ToysTreeRef } from '../types/ToysTree.type';

export interface HookToysProps {
  children: ReactNode;
}

const defaultRootToy: ToysTree = {
  id: '__root__',
  parent: null,
  children: null,
  current: {
    type: ToyType.DefaultRoot,
    state: [],
    nextState: null,
    props: {},
    previousProps: null,
    _currentStateIndex: 0
  },
};

export interface IToysContext {
  toysTree: MutableRefObject<ToysTreeRef>;
  readonly events: ToyEvent[];
  storeEvent: (e: ToyEvent) => void;
}

const ToysContext = createContext<IToysContext | null>(null);

export const ToysContextProvider = ({ children }: HookToysProps) => {
  const [events, setEvents] = useState<ToyEvent[]>([]);
  const hierachyRef = useRef<ToysTreeRef>({
    toyTreeContext: defaultRootToy,
    currentToy: defaultRootToy,
  });

  const storeEvent: IToysContext['storeEvent'] = (e) =>
    setEvents([...events, e]);

  return (
    <ToysContext.Provider
      value={{ events, storeEvent, toysTree: hierachyRef }}
    >
      {children}
    </ToysContext.Provider>
  );
};

export const useToysContext = () => {
  const context = useContext(ToysContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
