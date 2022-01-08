import { render } from '@testing-library/react';

import ExternalLink from './external-link';

describe('CustomLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExternalLink href="www.example.com" >Example.com</ExternalLink>);
    expect(baseElement).toBeTruthy();
  });
});
