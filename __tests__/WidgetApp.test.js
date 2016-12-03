import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import WidgetApp from '../app/components/WidgetApp';

const expect = chai.expect;

describe('<WidgetApp />', () => {
  const wrapper = shallow(<WidgetApp />);
  it('renders the correct container', () => {
    expect(wrapper.name()).to.equal('div');
    expect(wrapper.hasClass('weather-container')).to.be.true;
  });

  it('renders the correct header', () => {
    const wrapperHeading = wrapper.find('.weather-container__title.weather-container__title--h1');

    expect(wrapperHeading.name()).to.equal('h1');
    expect(wrapperHeading.text()).to.equal("Today's weather...");
  });
});

