import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

const wrap = shallow(<TopNav />);

describe('TopNav', () => {
  it('renders the TopNav Component correctly', () => {
    expect(wrap).toMatchSnapshot();
  });
});