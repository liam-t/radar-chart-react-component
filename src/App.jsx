import React from 'react';
import styled from 'styled-components/macro';
import RadarChart from 'components/RadarChart/index';

function App() {
  const data = [
    {
      name: 'series1',
      color: 'pink',
      axes: [
        {
          name: 'strength',
          val: 100,
          valDomain: [0, 100],
        },
        {
          name: 'speed',
          val: 50,
          valDomain: [0, 100],
        },
        {
          name: 'skill',
          val: 100,
          valDomain: [0, 100],
        },
        {
          name: 'agility',
          val: 100,
          valDomain: [0, 100],
        },
        {
          name: 'intellegence',
          val: 100,
          valDomain: [0, 100],
        },
      ],
    },
    {
      name: 'series2',
      color: 'lightblue',
      axes: [
        {
          name: 'strength',
          val: 23,
          valDomain: [0, 100],
        },
        {
          name: 'speed',
          val: 24,
          valDomain: [0, 100],
        },
        {
          name: 'skill',
          val: 71,
          valDomain: [0, 100],
        },
        {
          name: 'agility',
          val: 92,
          valDomain: [0, 100],
        },
        {
          name: 'intellegence',
          val: 51,
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
          axesSeriesIndex={0}
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
