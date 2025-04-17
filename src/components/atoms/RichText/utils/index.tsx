/** Resources */
import { JSX } from 'react';

export const options: Record<string, { tag: keyof JSX.IntrinsicElements; class: string }> = {
  h1: { tag: 'h1', class: 'size_big' },
  h2: { tag: 'h2', class: 'size_big' },
  h3: { tag: 'h3', class: 'size_medium' },
  h4: { tag: 'h4', class: 'size_medium' },
  h5: { tag: 'h5', class: 'size_little' },
  h6: { tag: 'h6', class: 'size_little' },
  s1: { tag: 'span', class: 's1' },
  s2: { tag: 'span', class: 's2' },
  s3: { tag: 'span', class: 's3' },
  s4: { tag: 'span', class: 's4' },
  p1: { tag: 'p', class: 'p1' },
  p2: { tag: 'p', class: 'p2' },
  p3: { tag: 'p', class: 'p3' },
  p4: { tag: 'p', class: 'p4' },
};
