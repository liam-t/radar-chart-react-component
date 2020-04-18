import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import Series from './Series';

const propTypes = {
  width: PT.number.isRequired,
  height: PT.number.isRequired,
  series: PT.arrayOf(serieDef).isRequired,
};
const defaultProps = {};

const Svg = ({
  series,
  width,
  height,
}) => {
  const padding = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };
  const innerWidth = width - padding.left - padding.right;
  // const innerHeight = height - padding.top - padding.bottom;
  return (
    <SvgEl width={width} height={height}>
      <PadTransform transform={`translate(${padding.left} ${padding.top})`}>
        <rect
          width={innerWidth}
          height={innerWidth}
          stroke="lightblue"
          fill="none"
        />
        <circle
          r={innerWidth / 2}
          cx={innerWidth / 2}
          cy={innerWidth / 2}
          stroke="lightgreen"
          fill="none"
        />
        <SeriesContainer>
          {series.map((data) => (
            <Series
              key={data.name}
              data={data}
              color={data.color}
              radius={innerWidth / 2}
            />
          ))}
        </SeriesContainer>
      </PadTransform>
    </SvgEl>
  );
};
Svg.propTypes = propTypes;
Svg.defaultProps = defaultProps;

export default Svg;

const SvgEl = styled.svg``;
const PadTransform = styled.g``;
const SeriesContainer = styled.g``;
