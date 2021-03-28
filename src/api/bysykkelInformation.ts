import useSWR from "swr";
import { bysykkelFetcher } from "./utils";

export interface BysykkelInformation {
  data: { stations: StationInformation[] }
  last_updated: number;
  ttl: number;
}

export interface StationInformation {
  address: string;
  capacity: number;
  lat: number;
  lon: number;
  name: string;
  station_id: string;
}

export const stationInformationUrl = "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";

export const useBysykkelInformation = () => useSWR<BysykkelInformation>(stationInformationUrl, bysykkelFetcher);