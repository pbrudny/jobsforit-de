import {
  parameterize, mergeUniq, intersection, daysAgo, sliceCity, sliceTech
} from './helpers';

describe('daysAgo', () => {
  it('displays 1 month as default', () => {
    expect(daysAgo('')).toEqual('1 month ago');
  });
});

describe('sliceCity', () => {
  it('returns proper number of elements to be displayed', () => {
    expect(sliceCity(1000)).toEqual(5);
    expect(sliceCity(1160)).toEqual(6);
    expect(sliceCity(1280)).toEqual(7);
    expect(sliceCity(1500)).toEqual(8);
    expect(sliceCity(1560)).toEqual(9);
    expect(sliceCity(2000)).toEqual(11);
  });
});

describe('sliceTech', () => {
  fit('returns proper number of elements to be displayed', () => {
    expect(sliceTech(1000)).toEqual(4);
    expect(sliceTech(1160)).toEqual(5);
    expect(sliceTech(1280)).toEqual(5);
    expect(sliceTech(1500)).toEqual(5);
    expect(sliceTech(1560)).toEqual(5);
    expect(sliceTech(2000)).toEqual(5);
  });
});
