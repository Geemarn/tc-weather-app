import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBody from './index';

describe('renders app body component', () => {
  const props = {
    activeTab: 'standard',
    weather: [{ main: 'cloudy' }],
    data: {
      name: 'london',
      main: {
        temp: 20,
      },
    },
  };

  render(<AppBody {...props} />);
  it('should render app body component', () => {
    const appBody = screen.getByTestId('tc-body');
    expect(appBody).toBeInTheDocument();
  });

  it('should contain text (name) based on data', () => {
    const { getByText } = render(<AppBody {...props} />);
    expect(getByText('london')).toBeInTheDocument();
  });

  it('should contain text (temp in standard) based on data', () => {
    const { getByText } = render(<AppBody {...props} />);
    expect(getByText('20°K')).toBeInTheDocument();
  });

  it('should contain text (temp in metric) based on data', () => {
    const newProps = {
      ...props,
      activeTab: 'metric',
    };
    const { getByText } = render(<AppBody {...newProps} />);
    expect(getByText('20°C')).toBeInTheDocument();
  });

  it('should display section if main data exists', () => {
    const { getByTestId } = render(<AppBody {...props} />);
    expect(getByTestId('tc-bottom-card')).toBeInTheDocument();
  });

  it('should display section if main data does not exist', () => {
    const newProps = {
      ...props,
      data: {
        main: null,
      },
    };
    const { queryByTestId } = render(<AppBody {...newProps} />);
    expect(queryByTestId('tc-bottom-card')).toBeNull();
  });

  it('should display img file in the document', () => {
    const { getByAltText } = render(<AppBody {...props} />);
    expect(getByAltText('wth-loc')).toBeInTheDocument();
  });
});
