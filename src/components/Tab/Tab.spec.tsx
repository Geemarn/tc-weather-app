import React from 'react';
import { render, screen } from '@testing-library/react';
import Tab from './index';

describe('renders app component', () => {
  const props = {
    activeTab: 'standard-test',
    setActiveTab: jest.fn(),
  };
  render(<Tab {...props} />);
  it('should render app component', () => {
    const appComponent = screen.getByTestId('tc-tab');
    expect(appComponent).toBeInTheDocument();
  });

  it('should contain class "header"', () => {
    const { getByText } = render(<Tab {...props} />);
    expect(getByText('Standard')).toBeInTheDocument();
    expect(getByText('Imperial')).toBeInTheDocument();
    expect(getByText('Metric')).toBeInTheDocument();
  });
});
