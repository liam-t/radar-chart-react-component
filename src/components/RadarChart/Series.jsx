import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import { scaleLinear, lineRadial } from 'd3';
import { transparentize } from 'polished';
import { animated } from 'react-spring';
import Animator from './Animator';

const propTypes = {
  data: serieDef.isRequired,
  radius: PT.number.isRequired,
  color: PT.string.isRequired,
  blendMode: PT.string.isRequired,
  opacity: PT.number.isRequired,
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
      <Animator path={path}>
        {(animatedPath) => (
          <AxesPath
            d={animatedPath}
            color={color}
            transform={`translate(${radius} ${radius})`}
            blendmode={blendMode}
            theopacity={opacity}
          />
        )}
      </Animator>
    </SeriesWrap>
  );
};
Series.propTypes = propTypes;
Series.defaultProps = defaultProps;

export default Series;

const SeriesWrap = styled.g``;
const AxesPath = styled(animated.path)`
  fill: ${(p) => transparentize(1 - p.theopacity, p.color)};
  stroke: ${(p) => p.color};
  mix-blend-mode: ${(p) => p.blendmode};
`;
