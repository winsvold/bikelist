import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { StationInformation } from "../api/bysykkelInformation";
import styled from "styled-components/macro";
import Station from "./Station";

const StyledMapContainer = styled(MapContainer)`
  height: max(20rem, 40vh);
  max-width: 100vw;
  min-width: 80vw;
  background-color: gray;
  margin-bottom: 2rem;
  .leaflet-marker-icon {
    border-radius: 50%;
    filter: drop-shadow(0 0 .5rem hsl(0, 0%, 40%, .5));
  }
`;

const icon = L.icon({
  iconUrl: 'favicon.png',
  iconSize: [65,59]
})

interface Props {
  stations: StationInformation[];
}

function Map(props: Props) {
  return (
    <StyledMapContainer center={[59.9238378, 10.7460917]} zoom={12}>
      <TileLayer attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.stations.map(station => (
        <Marker key={station.station_id} position={{lat: station.lat, lng: station.lon}} icon={icon} alt={station.name}>
          <Popup>
            <Station {...station} />
          </Popup>
        </Marker>
      ))}
    </StyledMapContainer>
  );
}

export default Map;