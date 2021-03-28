import { BysykkelStatus } from "../api/bysykkelStatus";

export const stationStatusMockData: BysykkelStatus = {
  last_updated: 0,
  ttl: 0,
  data: {
    stations: [
      {
        station_id: "1",
        is_installed: 1,
        is_renting: 1,
        is_returning: 1,
        last_reported: 0,
        num_bikes_available: 5,
        num_docks_available: 10,
      },
      {
        station_id: "2",
        is_installed: 1,
        is_renting: 1,
        is_returning: 1,
        last_reported: 0,
        num_bikes_available: 5,
        num_docks_available: 10,
      },
      {
        station_id: "3",
        is_installed: 1,
        is_renting: 1,
        is_returning: 1,
        last_reported: 0,
        num_bikes_available: 5,
        num_docks_available: 10,
      }
    ]
  }
};