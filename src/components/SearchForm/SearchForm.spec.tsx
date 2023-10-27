import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from './index';

describe('renders search form component', () => {
  const props = {
    handleSearchLocation: jest.fn(),
    setLocation: jest.fn(),
  };

  it('should render search component', () => {
    render(<SearchForm {...props} />);
    const searchComponent = screen.getByTestId('tc-search');
    expect(searchComponent).toBeInTheDocument();
  });

  it('should contain an input', () => {
    const { getByTestId } = render(<SearchForm {...props} />);
    expect(getByTestId('tc-search-input')).toBeInTheDocument();
  });
});
