import React from 'react';
import chai from 'chai';
import { mount } from 'enzyme';
import ListWidgets from '../app/components/views/ListWidgets';

const expect = chai.expect;

describe('<ListWidgets />', () => {
  const mockWidgets = [
    {
      id: 'test',
      title: 'Imperial with Wind Data',
      unit: 'imperial',
      wind: true,
    },
  ];

  const wrapper = mount(<ListWidgets widgets={mockWidgets} />);

  it('should allow us to set props', () => {
    wrapper.setProps({ widgets: mockWidgets });
    expect(wrapper.props().widgets).to.equal(mockWidgets);
  });

  it('renders the correct container', () => {
    const wrapperContainer = wrapper.find('.weather-container__list-widgets');
    expect(wrapperContainer.name()).to.equal('div');
    expect(wrapperContainer.hasClass('weather-container__list-widgets')).to.be.true;
  });

  it('renders the correct header', () => {
    const wrapperHeading = wrapper.find('.weather-container__title');
    expect(wrapperHeading.name()).to.equal('h2');
    expect(wrapperHeading.text()).to.equal('Your Widgets...');
  });
});

