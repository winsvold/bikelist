import { rest } from "msw";
import { stationInformationMockData } from "./stationInformationMockData";
import { stationStatusMockData } from "./stationStatusMockData";

export const apiMockHandlers = [
  rest.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json', async (req, res, ctx) => {
    return res(ctx.json(stationInformationMockData))
  }),
  rest.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json', async (req, res, ctx) => {
    return res(ctx.json(stationStatusMockData))
  }),
]