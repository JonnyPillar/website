import { createElement } from 'react';
import marksy from 'marksy';

export function parseMarkup(field) {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
}
