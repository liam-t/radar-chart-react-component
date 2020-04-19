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
  showLines: PT.bool.isRequired,
  lineOffset: PT.number.isRequired,
  lineOpacity: PT.number.isRequired,
  lineStrokeDasharray: PT.string.isRequired,
};
const defaultProps = {};

const Svg = ({
  series,
  width,
  height,
  axesSeriesIndex,
  showLines,
  lineOffset,
  lineOpacity,
  lineStrokeDasharray,
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
          <Axes
            axes={series[axesSeriesIndex].axes}
            radius={radius}
            showLines={showLines}
            lineOffset={lineOffset}
            lineOpacity={lineOpacity}
            lineStrokeDasharray={lineStrokeDasharray}
          />
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
