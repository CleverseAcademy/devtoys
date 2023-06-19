import { ToysContextProvider } from '@devtoys/hook-toys';
import ReduceWrapper from './components/ReduceWrapper';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <ToysContextProvider>
      <ReduceWrapper />
    </ToysContextProvider>
  );
}
