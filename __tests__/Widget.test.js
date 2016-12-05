import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Widget from '../app/components/views/Widget';

const expect = chai.expect;

describe('<Widget />', () => {
  const mockWidgets = [
    {
      id: 'test',
      title: 'Imperial with Wind Data',
    },
  ];

  const generateCodeCopy = `<iframe src="http://localhost:3000/widget?widgetId=${mockWidgets.id}" width="800" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>`;

  const wrapper = shallow(<Widget id={mockWidgets[0].id} title={mockWidgets[0].title} />);

  it('should allow us to set props', () => {
    wrapper.setProps({ id: mockWidgets.id });
    expect(wrapper.props().id).to.equal(mockWidgets.id);

    wrapper.setProps({ title: mockWidgets.title });
    expect(wrapper.props().title).to.equal(mockWidgets.title);
  });

  it('renders the correct <li>', () => {
    const li = wrapper.find('.weather-container__list-widgets-item');
    expect(li.name()).to.equal('li');
  });

  it('renders the correct embed label when the <a> hasn\'t been clicked', () => {
    const embedLabel = wrapper.find('.weather-container__show-embed-code');
    expect(embedLabel.text()).to.equal('[ Show embed code ]');
  });

  it('renders the correct embed copy', () => {
    const embedLabel = wrapper.find('.weather-container__embed-copy');
    expect(embedLabel.text()).to.equal('Copy the following code onto your website...');
  });

  it('renders the correct embeded code', () => {
    const embedLabel = wrapper.find('code');
    expect(embedLabel.text()).to.equal(generateCodeCopy);
  });
});

