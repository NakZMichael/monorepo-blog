import { render } from '@testing-library/react';

import Meta from './meta';

describe('Meta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meta meta={{
      title:'test page'
    }} />);
    expect(baseElement).toBeTruthy();
  });
});
