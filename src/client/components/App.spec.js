import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import AuthForm from '../containers/AuthForm';
import {Button} from 'react-bootstrap';
describe("App", ()=> {
  const wrapper = shallow(<App />);
  it('should have an AuthForm', ()=> {
    const authForm = wrapper.find(AuthForm);
    expect(authForm.length).toBe(1);
  });
  
});