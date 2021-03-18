import styled from "styled-components/macro";
import { useBysykkelStatus } from "../api/bysykkelStatus";
import React from "react";
import { StationInformation } from "../api/bysykkelInformation";

const Style = styled.li`
  padding: 1rem;

  > *:not(:last-child) {
    margin-bottom: .3rem;
  }
  &:nth-child(even) {
      background-color: hsl(0, 0%, 0%, 0.2);
  }
`;

function Status(props: { id: string }) {
  const { data: response, error } = useBysykkelStatus();

  if (error) {
    console.error(error);
    return <div>Kunne ikke hente status for bysykkelstativet</div>;
  }

  if (!response) {
    return <div>Henter status..</div>;
  }

  const currentStationStatus = response.data.stations.find(station => station.station_id === props.id);

  if (!currentStationStatus) {
    return <div>Ugyldig id på bysykkelstativ</div>;
  }

  return (
    <>
      <div>🚲 Sykler: {currentStationStatus.num_bikes_available}</div>
      <div>🔒 Plasser: {currentStationStatus.num_docks_available}</div>
    </>
  );
}

const H2 = styled.h2`
    font-size: 1.1rem;
`;

function Station(props: StationInformation) {
  return (
    <Style>
      <H2>{props.name}</H2>
      <Status id={props.station_id} />
    </Style>
  );
}

export default Station;