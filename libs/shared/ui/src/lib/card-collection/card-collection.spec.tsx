import { render } from '@testing-library/react';

import CardCollection from './card-collection';

describe('CardCollection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCollection />);
    expect(baseElement).toBeTruthy();
  });
});
