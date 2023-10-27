import React from 'react';
import { render, screen } from '@testing-library/react';
import Favourite from './index';

describe('renders Favourite component', () => {
  const props = {
    favourite: { isTrue: false, data: ['test'], openDropDown: false },
    setFavorite: jest.fn(),
    locationName: '',
  };

  render(<Favourite {...props} />);

  it('should render app component', () => {
    const favComponent = screen.getByTestId('tc-favourite');
    expect(favComponent).toBeInTheDocument();
  });

  it('should display img file in the document', async () => {
    const { getByAltText } = render(<Favourite {...props} />);
    expect(getByAltText('favourite-icon')).toBeInTheDocument();
  });

  it('should display img file(hamburger) in the document', async () => {
    const { getByAltText } = render(<Favourite {...props} />);
    expect(getByAltText('hamburger')).toBeInTheDocument();
  });

  it('should not display section dropdown content if openDropDown=false', () => {
    const { queryByTestId } = render(<Favourite {...props} />);
    expect(queryByTestId('tc-dropdown-content')).toBeNull();
  });

  it('should display section dropdown content if openDropDown=true', () => {
    const newProps = {
      ...props,
      favourite: { ...props.favourite, openDropDown: true },
    };
    const { getByTestId } = render(<Favourite {...newProps} />);
    expect(getByTestId('tc-dropdown-content')).toBeInTheDocument();
  });
});
