import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import EditorApp from '../app/components/EditorApp';

const expect = chai.expect;

describe('<EditorApp />', () => {
  const wrapper = shallow(<EditorApp />);
  it('renders the correct container', () => {
    expect(wrapper.name()).to.equal('div');
    expect(wrapper.hasClass('weather-container')).to.be.true;
  });

  it('renders the correct header', () => {
    const wrapperHeading = wrapper.find('.weather-container__title.weather-container__title--h1');

    expect(wrapperHeading.name()).to.equal('h1');
    expect(wrapperHeading.text()).to.equal('Widget editor');
  });
});

