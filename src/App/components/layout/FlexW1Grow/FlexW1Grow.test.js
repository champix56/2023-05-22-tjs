import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexW1Grow from './FlexW1Grow';

describe('<FlexW1Grow />', () => {
  test('it should mount', () => {
    render(<FlexW1Grow />);
    
    const flexW1Grow = screen.getByTestId('FlexW1Grow');

    expect(flexW1Grow).toBeInTheDocument();
  });
});