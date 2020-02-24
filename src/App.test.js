import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  it('Should render <h1> inside the App', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h1').exists()).toBeTruthy();
  });
});
