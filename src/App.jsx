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
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Speed',
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Skill',
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Agility',
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Intellegence',
          val: 80,
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
  height: 500px;
`;
