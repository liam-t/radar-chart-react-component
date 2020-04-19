import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import Series from './Series';
import Axes from './Axes';

const propTypes = {
  width: PT.number.isRequired,
  height: PT.number.isRequired,
  series: PT.arrayOf(serieDef).isRequired,
  axesSeriesIndex: PT.oneOfType([
    PT.bool,
    PT.number,
  ]).isRequired,
};
const defaultProps = {};

const Svg = ({
  series,
  width,
  height,
  axesSeriesIndex,
}) => {
  const padding = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };
  const innerWidth = width - padding.left - padding.right;
  // const innerHeight = height - padding.top - padding.bottom;
  const radius = innerWidth / 2;

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
              radius={radius}
            />
          ))}
        </SeriesContainer>
        {axesSeriesIndex !== false && (
          <Axes axes={series[axesSeriesIndex].axes} radius={radius} />
        )}
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
