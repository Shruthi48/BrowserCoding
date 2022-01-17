// import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';

test('renders learn react link', () => {
  // render(<App />);
  const component = shallow(<App />);
  expect(component.find('.App-header').text()).toEqual('Edit src/App.js and save to reload.Learn React');
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
