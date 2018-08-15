import { createElement } from 'react';
import { createClient } from 'contentful';
import marksy from 'marksy';

export function parseMarkup(field) {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
}

export function getContent(options) {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });

  return client.getEntries(options);
}