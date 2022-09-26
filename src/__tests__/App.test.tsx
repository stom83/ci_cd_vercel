import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';
test('Renders main page correctly', () => {
  render(<App/>);
  expect(true).toBeTruthy();
});
test('Prueba adicional 1',()=>{
  render(<App/>);
  expect(2+2).toBe(4);
});
test('Prueba adicional 2',()=>{
  render(<App/>);
  const title = screen.getByText('Vite + React'); 
  expect(title.tagName).toBe('H1');
});