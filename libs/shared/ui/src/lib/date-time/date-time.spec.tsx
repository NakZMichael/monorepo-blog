import { render } from '@testing-library/react';

import DateTime from './date-time';

describe('DateTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateTime />);
    expect(baseElement).toBeTruthy();
  });
});
