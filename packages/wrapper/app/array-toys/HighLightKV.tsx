import { FC } from 'react';

export interface IHightLightKVProps {
  name: string;
  value: string;
}

const HighLightKV: FC<IHightLightKVProps> = ({ name, value }) => (
  <div className="flex flex-row items-center">
    <p className="text-base h-full bg-sky-300">{name}: </p>
    <p className="font-code text-lg bg-purple-700 text-white">{value}</p>
  </div>
);

export default HighLightKV;
