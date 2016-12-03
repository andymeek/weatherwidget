import chai from 'chai';
import { saveState } from '../app/localStorage';

const expect = chai.expect;

describe('localStorage saveState method', () => {
  it('to throw error when not invoked with the correct argument', () => {
    expect(() => {
      throw saveState();
    }).to.throw(Error, 'localStorage setItem error');
  });
});

