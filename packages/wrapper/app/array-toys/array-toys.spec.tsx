import { render } from '@testing-library/react';

import ArrayToys from './array-toys';

describe('ArrayToys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArrayToys />);
    expect(baseElement).toBeTruthy();
  });
});
