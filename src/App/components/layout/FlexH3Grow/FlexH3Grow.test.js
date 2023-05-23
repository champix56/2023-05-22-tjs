import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexH3Grow from './FlexH3Grow';

describe('<FlexH3Grow />', () => {
  test('it should mount', () => {
    render(<FlexH3Grow />);
    
    const flexH3Grow = screen.getByTestId('FlexH3Grow');

    expect(flexH3Grow).toBeInTheDocument();
  });
});