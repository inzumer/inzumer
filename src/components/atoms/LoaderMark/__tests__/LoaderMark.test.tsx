import { render } from '@testing-library/react';
import { LoaderMark } from '../LoaderMark';

describe('LoaderMark', () => {
  it('should draw a ring around a pulsing dot that stops with reduced motion', () => {
    const { container } = render(<LoaderMark />);

    expect(container.querySelector('.border-t-white')).toBeInTheDocument();
    expect(container.querySelector('.animate-pulse')).toHaveClass('motion-reduce:animate-none');
  });
});
