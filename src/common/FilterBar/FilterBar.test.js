import React from 'react';
import { shallow } from 'enzyme';
import FilterBar from './FilterBar';

const wrap = shallow(<FilterBar />);

describe('FilterBar', () => {
  it('renders the FilterBar Component correctly', () => {
    expect(wrap).toMatchSnapshot();
  });
});