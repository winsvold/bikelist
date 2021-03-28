import { BysykkelInformation } from "../api/bysykkelInformation";

export const stationInformationMockData: BysykkelInformation = {
  last_updated: 0,
  ttl: 0,
  data: {
    stations: [{
        "station_id": "1",
        "name": "Stasjon 1",
        "address": "Stasjonsgata 1",
        "lat": 59.913150534075015,
        "lon": 10.732281291700133,
        "capacity": 15
      }, {
        "station_id": "2",
        "name": "Stasjon 2",
        "address": "Stasjonsgata 2",
        "lat": 59.92883258499495,
        "lon": 10.799770383800876,
        "capacity": 20
      }, {
        "station_id": "3",
        "name": "Stasjon 3",
        "address": "Stasjonsgata 3",
        "lat": 59.90591083488326,
        "lon": 10.778592132296495,
        "capacity": 6
      }
    ]
  }
};