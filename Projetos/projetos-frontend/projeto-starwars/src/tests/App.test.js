 import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import AppProvider from '../context/AppProvider';
import { mockAPI } from './mocks/mockAPI';


describe('Test App', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI),
    });
    await act(async () => {
      render(
        <AppProvider>
          <App />
        </AppProvider>
      );
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('Checks if Fetch is called when rendering the page', async () => {
    expect(global.fetch).toBeCalledTimes(2);
    expect(global.fetch).toBeCalledWith('https://swapi.dev/api/planets');
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });
  it('Checks that the page displays elements correctly', () => {
    screen.getByTestId('column-filter');
    screen.getByTestId('button-filter');
    screen.getByTestId('comparison-filter');
    screen.getByTestId('value-filter');
  });
  it('Checks user interaction when populating filters with Tatooine values', () => {
    userEvent.type(screen.getByTestId('name-filter'), 'Tatooine');
    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
    userEvent.type(screen.getByTestId('value-filter'), '10000');
    userEvent.click(screen.getByTestId('button-filter'));
  });
});
