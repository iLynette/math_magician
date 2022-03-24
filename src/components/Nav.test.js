import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

it('renders correctly', () => {
  const nav = renderer
    .create(
      <Router>
        <Nav />
      </Router>,
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
});
