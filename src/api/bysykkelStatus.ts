import useSWR from "swr";
import { bysykkelFetcher } from "./utils";

export interface BysykkelStatus {
  data: { stations: StationStatus[] }
  last_updated: number;
  ttl: number;
}

export interface StationStatus {
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
  station_id: string;
}

export const stationStatusUrl = "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json";

export const useBysykkelStatus = () => useSWR<BysykkelStatus>(stationStatusUrl, bysykkelFetcher, {refreshInterval: 30000});