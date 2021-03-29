import Map from "./Map";
import { stationInformationMockData } from "../mocks/stationInformationMockData";
import { render, screen, within } from "../customTestingLibrary";
import App from "../App";
import userEvent from "@testing-library/user-event";
import React from "react";

const stations = stationInformationMockData.data.stations;

describe('Bysykkelkart', () => {
  test('Viser bysykkelstasjoner', () => {
    render(<Map stations={stations} />);

    stations.forEach(station => {
      const element = screen.getByRole('img', {name: station.name});
      expect(element).toBeInTheDocument();
    })
  })

  test('Viser bare bysykkelstasjoner som matcher søk', async () => {
    render(<App />);

    const søkefelt = await screen.findByLabelText(/Søk/i);
    userEvent.type(søkefelt, 'Stasjon 1');
    const treff = screen.getAllByRole('img', {name: /Stasjon/i});

    expect(treff).toHaveLength(1);
  })
})