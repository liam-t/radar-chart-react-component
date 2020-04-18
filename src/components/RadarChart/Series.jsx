import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import {
  // polygonHull,
  scaleLinear,
  lineRadial,
} from 'd3';

const propTypes = {
  data: serieDef.isRequired,
  radius: PT.number.isRequired,
  color: PT.string,
};
const defaultProps = {
  color: 'lightblue',
};


const getPoints = (axes, radius, scaleGen, angleSliceRadians) => (
  axes.map(({ val, valDomain }, i) => (
    [angleSliceRadians * i, scaleGen(valDomain, [0, radius])(val)]
  ))
);

const getPath = (points) => lineRadial()(points);


const Series = ({ data, radius, color }) => {
  const { axes } = data;
  const angleSliceRadians = (Math.PI * 2) / axes.length;
  const points = getPoints(axes, radius, scaleLinear, angleSliceRadians);
  const path = getPath(points);

  return (
    <SeriesWrap>
      <AxesPath
        d={path}
        color={color}
        transform={`translate(${radius} ${radius})`}
      />
    </SeriesWrap>
  );
};
Series.propTypes = propTypes;
Series.defaultProps = defaultProps;

export default Series;

const SeriesWrap = styled.g``;
const AxesPath = styled.path`
  fill: ${(p) => p.color};
  mix-blend-mode: multiply;
`;
