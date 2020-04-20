import React from 'react';
import styled from 'styled-components/macro';
import RadarChart from 'components/RadarChart/index';

function App() {
  const data = [
    {
      name: 'series1',
      color: 'lightgreen',
      axes: [
        {
          name: 'Strength',
          val: 60,
          valDomain: [0, 100],
        },
        {
          name: 'Speed',
          val: 100,
          valDomain: [0, 100],
        },
        {
          name: 'Skill',
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Agility',
          val: 65,
          valDomain: [0, 100],
        },
        {
          name: 'Intellegence',
          val: 45,
          valDomain: [0, 100],
        },
      ],
    },
  ];
  return (
    <AppWrap>
      <ChartWrap>
        <RadarChart
          name="Radar Chart"
          series={data}
        />
      </ChartWrap>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div``;
const ChartWrap = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
  height: 500px;
  font-family: sans-serif;
`;
