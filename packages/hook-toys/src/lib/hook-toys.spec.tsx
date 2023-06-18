import { render } from '@testing-library/react';

import HookToys from './hook-toys';

describe('HookToys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HookToys />);
    expect(baseElement).toBeTruthy();
  });
});
