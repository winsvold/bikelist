import React, { useState } from "react";
import styled from "styled-components/macro";
import Station from "./components/Station";
import { useBysykkelInformation } from "./api/bysykkelInformation";
import Input from "./components/Input";

const Style = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin: auto;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
`;

const StyledInput = styled(Input)`
  margin-bottom: 2rem;
`;

function App() {
  const { data: response, error } = useBysykkelInformation();
  const [søk, setSøk] = useState("");

  if (error) {
    console.error(error);
    return (<Style>Beklager, det skjedde en feil 🤷‍♀️️</Style>);
  }

  if (!response) {
    return <Style>Henter bysykkelstativer... 🚴‍♂️</Style>;
  }

  const stations = response.data.stations.sort(((a, b) => a.name > b.name ? 1 : -1));
  const matches = søk ? stations.filter(station => station.name.toLowerCase().includes(søk.toLowerCase())) : stations;

  return (
    <Style>
      <H1>Bysykler i Oslo</H1>
      <StyledInput id="Søk" value={søk} setValue={setSøk} label="Søk etter bysyskkelstativ" />
      {!matches.length
        ? <div>Fant ingen stasjoner på søket ditt</div>
        : <ul>
          {matches.map(station => <Station {...station} key={station.station_id} />)}
        </ul>
      }
    </Style>
  );
}

export default App;
