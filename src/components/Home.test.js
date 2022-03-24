import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toTree();
  expect(tree).toMatchSnapshot();
});
