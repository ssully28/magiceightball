import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import App from './App';
import EightBall from './EightBall';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders using mount', () => {
  mount(<EightBall />);
});

it('renders initial message', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.html()).toContain("Think of a question...");
});

it('renders initial message', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.html()).toContain("Think of a question...");

  // Change state and test:
  wrapper.setState({msg: "TEST", color: "red"});
  expect(wrapper.html()).toContain("TEST");
});

it('changes default message on click', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.html()).toContain("Think of a question...");

  // Simulate click and make sure does not contain default message:
  wrapper.simulate("click");
  expect(wrapper.html()).not.toContain("Think of a question...");
});

it('changes default message on click', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.html()).toContain("Think of a question...");

  // Override the props to simplify testing:
  wrapper.setProps({answers:
    [
      { msg: "Test Msg 1", color: "green" },
      { msg: "Test Msg 2", color: "green" },
      { msg: "Test Msg 3", color: "green" },
    ]
  });

  // Simulate click:
  wrapper.simulate("click");

  // Use regex to verify that matches one of the possible options:
  expect(wrapper.html()).toMatch(/Test Msg \d/);

});
