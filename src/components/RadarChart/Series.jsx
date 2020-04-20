import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import {
  scaleLinear,
  lineRadial,
} from 'd3';
import { transparentize } from 'polished';

const propTypes = {
  data: serieDef.isRequired,
  radius: PT.number.isRequired,
  color: PT.string.isRequired,
  blendMode: PT.string.isRequired,
  opacity: PT.number.isRequired,
  // d3Curve: PT.oneOfType([
  //   PT.func,
  //   PT.bool,
  // ]).isRequired,
};
const defaultProps = {};


export const getPoints = (axes, radius, scaleGen, angleSliceRadians) => (
  axes.map(({ val, valDomain }, i) => (
    [angleSliceRadians * i, scaleGen(valDomain, [0, radius])(val)]
  ))
);

export const getPath = (points, curve) => {
  let lineGen = lineRadial();
  if (curve) lineGen = lineGen.curve(curve);
  return `${lineGen(points)}z`;
};


const Series = ({
  data,
  radius,
  color,
  blendMode,
  opacity,
}) => {
  const { axes, d3Curve } = data;
  const angleSliceRadians = (Math.PI * 2) / axes.length;
  const points = getPoints(axes, radius, scaleLinear, angleSliceRadians);
  const path = getPath(points, d3Curve);

  return (
    <SeriesWrap>
      <AxesPath
        d={path}
        color={color}
        transform={`translate(${radius} ${radius})`}
        blendMode={blendMode}
        theOpacity={opacity}
      />
    </SeriesWrap>
  );
};
Series.propTypes = propTypes;
Series.defaultProps = defaultProps;

export default Series;

const SeriesWrap = styled.g``;
const AxesPath = styled.path`
  fill: ${(p) => transparentize(1 - p.theOpacity, p.color)};
  stroke: ${(p) => p.color};
  mix-blend-mode: ${(p) => p.blendMode};
`;
