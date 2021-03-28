import { rest } from "msw";
import { stationInformationMockData } from "./stationInformationMockData";
import { stationStatusMockData } from "./stationStatusMockData";
import { stationInformationUrl } from "../api/bysykkelInformation";
import { stationStatusUrl } from "../api/bysykkelStatus";

export const apiMockHandlers = [
  rest.get(stationInformationUrl, async (req, res, ctx) => {
    return res(ctx.json(stationInformationMockData))
  }),
  rest.get(stationStatusUrl, async (req, res, ctx) => {
    return res(ctx.json(stationStatusMockData))
  }),
]