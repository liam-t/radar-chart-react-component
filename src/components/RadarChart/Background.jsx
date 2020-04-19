import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';
import { scaleLinear } from 'd3';
import { getPoints, getPath } from './Series';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  radius: PT.number.isRequired,
  fill: PT.string.isRequired,
  stroke: PT.string.isRequired,
  strokeWidth: PT.number.isRequired,
};
const defaultProps = {};

const Background = ({
  axes,
  radius,
  fill,
  stroke,
  strokeWidth,
}) => {
  const outlinePath = getPath(getPoints(
    axes.map((axis) => ({
      ...axis,
      val: Math.max(...axis.valDomain),
    })),
    radius,
    scaleLinear,
    (Math.PI * 2) / axes.length,
  ));
  return (
    <BackgroundPath
      d={outlinePath}
      fill={fill}
      transform={`translate(${radius} ${radius})`}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};
Background.propTypes = propTypes;
Background.defaultProps = defaultProps;

export default Background;

const BackgroundPath = styled.path``;
