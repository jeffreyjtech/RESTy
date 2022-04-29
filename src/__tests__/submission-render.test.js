import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from '../App'

jest.mock('axios');

describe('Testing submission-results integration with mocked axios', () => {

  test('Testing that data is rendered in Results component when Form is submitted', async () => {
    axios.mockResolvedValue({ data: { test: 'test' } });
    render(<App />);

    let urlInput = screen.getByTestId('url-input');
    userEvent.type(urlInput, 'test url')

    let goButton = screen.getByTestId('go-button');
    userEvent.click(goButton);

    let resultsDisplay = await screen.findByText(/test/im);
    expect(urlInput).toHaveValue('test url')
    expect(resultsDisplay).toBeInTheDocument();
  });
})
