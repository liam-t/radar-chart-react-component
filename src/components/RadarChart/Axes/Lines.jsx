import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';
import { getXY } from './helpers';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  angleSliceRadians: PT.number.isRequired,
  radius: PT.number.isRequired,
  lineOffset: PT.number.isRequired,
  opacity: PT.number.isRequired,
  strokeDasharray: PT.string.isRequired,
};
const defaultProps = {};

const Lines = ({
  axes,
  angleSliceRadians,
  radius,
  lineOffset,
  opacity,
  strokeDasharray,
}) => (
  <LinesWrap transform={`translate(${radius} ${radius})`}>
    {axes.map(({ name }, i) => {
      const [x, y] = getXY(radius - lineOffset, angleSliceRadians * i);
      return (
        <Line
          key={name}
          x1={0}
          y1={0}
          x2={x}
          y2={y}
          strokeDasharray={strokeDasharray}
          opacity={opacity}
        />
      );
    })}
  </LinesWrap>
);
Lines.propTypes = propTypes;
Lines.defaultProps = defaultProps;

export default Lines;

const LinesWrap = styled.g``;
const Line = styled.line`
  stroke: black;
`;
