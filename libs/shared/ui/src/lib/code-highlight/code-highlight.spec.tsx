import { render } from '@testing-library/react';

import CodeHighlight from './code-highlight';

describe('CodeHighlight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeHighlight />);
    expect(baseElement).toBeTruthy();
  });
});
