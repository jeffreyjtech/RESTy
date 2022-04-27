import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from '../App'

describe('Testing submission-results integration', () => {

  test('Testing that data is rendered in Results component when Form is submitted', () => {
    render(<App />);
  
    let goButton = screen.getByTestId('go-button');
    fireEvent.click(goButton);
  
    let resultsDisplay = screen.getByTestId('results-display');
    expect(resultsDisplay).toHaveTextContent(/.*/);
  });
})
