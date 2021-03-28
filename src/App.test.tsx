import React from 'react';
import { render, screen, within } from './customTestingLibrary';
import App from './App';
import { stationInformationMockData } from "./mocks/stationInformationMockData";

const mockStations = stationInformationMockData.data.stations;

describe('Bikelist',() => {
  test('rendrer uten å krasje', async () => {
    render(<App />);
    const header = await screen.findByRole('heading', { name: /Bysykler i Oslo/i });
    expect(header).toBeInTheDocument();
  });

  test('viser en liste over bysykkelstativer', async () => {
    render(<App />);

    const bysykkelListe = await screen.findByRole('list');

    mockStations.forEach((stasjon) => {
      const element = within(bysykkelListe).getByRole("heading", { name: stasjon.name });
      expect(element).toBeInTheDocument();
    })
  })
})
