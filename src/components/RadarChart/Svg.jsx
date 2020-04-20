import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import serieDef from 'models/serie';
import Series from './Series';
import Axes from './Axes';
import Background from './Background';

const propTypes = {
  width: PT.number.isRequired,
  height: PT.number.isRequired,
  padding: PT.shape({
    top: PT.number.isRequired,
    bottom: PT.number.isRequired,
    left: PT.number.isRequired,
    right: PT.number.isRequired,
  }).isRequired,
  series: PT.arrayOf(serieDef).isRequired,
  axesSeriesIndex: PT.oneOfType([
    PT.bool,
    PT.number,
  ]).isRequired,
  showLines: PT.bool.isRequired,
  lineOffset: PT.number.isRequired,
  lineOpacity: PT.number.isRequired,
  lineStrokeDasharray: PT.string.isRequired,
  backgroundFill: PT.string.isRequired,
  backgroundStroke: PT.string.isRequired,
  backgroundStrokeWidth: PT.number.isRequired,
  seriesBlendMode: PT.string.isRequired,
  seriesOpacity: PT.number.isRequired,
};
const defaultProps = {};

const Svg = ({
  series,
  width,
  height,
  padding,
  axesSeriesIndex,
  showLines,
  lineOffset,
  lineOpacity,
  lineStrokeDasharray,
  backgroundFill,
  backgroundStroke,
  backgroundStrokeWidth,
  seriesBlendMode,
  seriesOpacity,
}) => {
  const innerWidth = width - padding.left - padding.right;
  // const innerHeight = height - padding.top - padding.bottom;
  const radius = innerWidth / 2;

  return (
    <SvgEl width={width} height={height}>
      <PadTransform transform={`translate(${padding.left} ${padding.top})`}>
        <Background
          axes={series[axesSeriesIndex].axes}
          radius={radius}
          fill={backgroundFill}
          stroke={backgroundStroke}
          strokeWidth={backgroundStrokeWidth}
        />
        <SeriesContainer>
          {series.map((data) => (
            <Series
              key={data.name}
              data={data}
              color={data.color}
              radius={radius}
              blendMode={seriesBlendMode}
              opacity={seriesOpacity}
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
