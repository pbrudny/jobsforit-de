import React from 'react';
import { shallow } from 'enzyme';
import FilterButton from './FilterButton';

const wrap = shallow(<FilterButton />);

describe('FilterButton', () => {
  it('renders the FilterButton Component correctly', () => {
    expect(wrap).toMatchSnapshot();
  });
});