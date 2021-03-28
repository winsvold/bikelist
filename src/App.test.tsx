import React from 'react';
import { render, screen, within } from './customTestingLibrary';
import App from './App';
import { stationInformationMockData } from "./mocks/stationInformationMockData";
import userEvent from "@testing-library/user-event";

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

  test('viser kun stasjonsnavn som matcher søk', async () => {
    render(<App />);

    const søkefelt = await screen.findByLabelText(/Søk/i);

    userEvent.type(søkefelt, 'Stasjon 1');

    const bysykkelListe = screen.getByRole('list');

    const treff = within(bysykkelListe).getAllByRole('listitem');
    expect(treff).toHaveLength(1);
    within(bysykkelListe).getAllByRole('heading', {name: 'Stasjon 1'});
  })

  test('viser alle stasjoner om søk tømmes', async () => {
    render(<App />);

    const søkefelt = await screen.findByLabelText(/Søk/i);

    userEvent.type(søkefelt, 'Stasjon 1');
    userEvent.clear(søkefelt);

    const bysykkelListe = screen.getByRole('list');

    const treff = within(bysykkelListe).getAllByRole('listitem');
    expect(treff).toHaveLength(mockStations.length);
  })
})
