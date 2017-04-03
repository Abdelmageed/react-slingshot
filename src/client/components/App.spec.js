//require('../../../jasmine/helpers/setup.js');
import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import AuthForm from './AuthForm';

describe("App", ()=> {
  const wrapper = shallow(<App />);
//  console.log(window);
  it('should have an AuthForm', ()=> {
    const authForm = wrapper.find('.auth-form');
    expect(authForm.length).toBe(1);
  });
  
});