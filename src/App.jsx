import React from 'react';
import styled from 'styled-components/macro';
import RadarChart from 'components/RadarChart/index';
import { curveCardinalClosed as d3Curve } from 'd3';

function App() {
  const intitialData = [
    {
      d3Curve,
      name: 'series1',
      color: 'lightgreen',
      axes: [
        {
          name: 'Vim',
          val: 60,
          valDomain: [0, 100],
        },
        {
          name: 'Moxy',
          val: 100,
          valDomain: [0, 100],
        },
        {
          name: 'Spunk',
          val: 80,
          valDomain: [0, 100],
        },
        {
          name: 'Pith',
          val: 65,
          valDomain: [0, 100],
        },
        {
          name: 'Joie de vivre',
          val: 45,
          valDomain: [0, 100],
        },
      ],
    },
    {
      name: 'series2',
      color: 'lightblue',
      axes: [
        {
          name: 'Strength',
          val: 81,
          valDomain: [0, 100],
        },
        {
          name: 'Speed',
          val: 37,
          valDomain: [0, 100],
        },
        {
          name: 'Skill',
          val: 51,
          valDomain: [0, 100],
        },
        {
          name: 'Agility',
          val: 60,
          valDomain: [0, 100],
        },
        {
          name: 'Intellegence',
          val: 70,
          valDomain: [0, 100],
        },
      ],
    },
  ];

  const [data, setData] = React.useState(intitialData);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(intitialData.map((datum) => {
        const { axes } = datum;
        return {
          ...datum,
          axes: axes.map((axis) => ({
            ...axis,
            val: Math.floor(Math.random() * 100),
          })),
        };
      }));
    }, 2500);

    return () => {
      window.clearInterval(interval);
    };
  }, [intitialData]);

  return (
    <AppWrap>
      <ChartWrap>
        <RadarChart
          name="Test Chart"
          series={data}
          labelWidth={70}
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
