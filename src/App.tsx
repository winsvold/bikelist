import React from "react";
import styled from "styled-components/macro";
import Station from "./components/Station";
import { useBysykkelInformation } from "./api/bysykkelInformation";

const Style = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
    margin-bottom: 2rem;
`;

function App() {
  const { data: response, error } = useBysykkelInformation();

  if (error) {
    console.error(error);
    return (<Style>Beklager, det skjedde en feil 🤷‍♀️️</Style>);
  }

  if (!response) {
    return <Style>Henter bysykkelstativer... 🚴‍♂️</Style>
  }

  const stations = response.data.stations.sort(((a, b) => a.name > b.name ? 1 : -1));

  return (
    <Style>
      <H1>Bysykler i Oslo</H1>
      <ul>
        {stations.map(station => <Station {...station} key={station.station_id} />)}
      </ul>
    </Style>
  );
}

export default App;
