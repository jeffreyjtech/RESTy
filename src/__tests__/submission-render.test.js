import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from '../App'

jest.mock('axios');

describe('Testing submission-results integration with mocked axios', () => {

  test('Testing that data is rendered in Results component when Form is submitted', async () => {
    axios.mockResolvedValue({ data: { test: 'test' } });
    render(<App />);
    let urlInput = screen.getByTestId('url-input');
    // let dataInput = screen.getByTestId('data-input');

    fireEvent.change(urlInput, { target: { value: 'test-url' } })
    urlInput = await screen.findByText('test-url');

    let goButton = screen.getByTestId('go-button');
    fireEvent.click(goButton);

    let resultsDisplay = await screen.findByText('test');
    expect(resultsDisplay).toBeInTheDocument();
  });
})
