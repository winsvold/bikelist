import styled, { css } from "styled-components/macro";
import { useBysykkelStatus } from "../api/bysykkelStatus";
import React from "react";
import { StationInformation } from "../api/bysykkelInformation";

const Style = styled.div`
  padding: 1rem;

  > *:not(:last-child) {
    margin-bottom: .3rem;
  }
`;

const Attention = styled.div<{attention: boolean}>`
    ${props => props.attention && css`
      background-color: red;
      color: white;
    `}
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
    return <div>Ugyldig id pĆ„ bysykkelstativ</div>;
  }

  const availableBikes = currentStationStatus.num_bikes_available;
  const availableDocks = currentStationStatus.num_docks_available;
  return (
    <>
      <Attention attention={availableBikes === 0}>š“āāļø Sykler: {availableBikes}</Attention>
      <Attention attention={availableDocks === 0}>š Plasser: {availableDocks}</Attention>
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