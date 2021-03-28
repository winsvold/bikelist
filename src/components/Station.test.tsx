import { render, screen } from "../customTestingLibrary";
import Station from "./Station";
import { stationInformationMockData } from "../mocks/stationInformationMockData";
import { stationStatusMockData } from "../mocks/stationStatusMockData";
import { StationStatus, stationStatusUrl } from "../api/bysykkelStatus";
import { rest, testServer } from "../mocks/server";

const mockStationInformation = stationInformationMockData.data.stations[0];
const mockStationStatus = stationStatusMockData.data.stations[0];

const mockStatus = (status: Partial<StationStatus>) => {
  testServer.use(
    rest.get(stationStatusUrl, async (req, res, ctx) => {
      return res(ctx.json({ ...stationStatusMockData, data: { stations: [{ ...mockStationStatus, ...status }] } }));
    })
  );
};

describe("Station", () => {
  test('Viser stasjonsnavn', async () => {
    render(<Station {...mockStationInformation} />);

    const navn = await screen.findByText(mockStationInformation.name)
    expect(navn).toBeInTheDocument();
  })

  test("Viser hvor mange ledige sykler det er på stasjonen", async () => {
    render(<Station {...mockStationInformation} />);

    const availableBikes = await screen.findByText(/Sykler: 5/i);
    expect(availableBikes).toBeInTheDocument();
  });

  test("Viser hvor mange ledige plasser det er på stasjonen", async () => {
    render(<Station {...mockStationInformation} />);

    const availableDocks = await screen.findByText(/Plasser: 10/i);
    expect(availableDocks).toBeInTheDocument();
  });

  test('Viser rød bakgrunn hvis det er tomt for sykler', async () => {
    mockStatus({num_bikes_available: 0});

    render(<Station {...mockStationInformation} />);

    const availableBikes = await screen.findByText(/Sykler: 0/i);
    expect(availableBikes).toHaveStyle('background-color: red')
  })

  test('Viser rød bakgrunn hvis det ikke er noen ledige plasser', async () => {
    mockStatus({num_docks_available: 0});

    render(<Station {...mockStationInformation} />);

    const availableDocks = await screen.findByText(/Plasser: 0/i);
    expect(availableDocks).toHaveStyle('background-color: red')
  })
});