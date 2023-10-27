import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders app component', () => {
  render(<App />);
  it('should render app component', () => {
    const appComponent = screen.getByTestId('tc-app');
    expect(appComponent).toBeInTheDocument();
  });

  it('should contain class "header"', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('tc-header')).toBeInTheDocument();
  });
});
