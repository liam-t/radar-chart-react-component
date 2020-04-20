import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components/macro';
import serieDef from 'models/serie';
import ResizeDetector from 'react-resize-detector';
import Svg from './Svg';
import LabelsHtml from './LabelsHtml';

const propTypes = {
  name: PT.string,
  series: PT.arrayOf(serieDef).isRequired,
  axesSeriesIndex: PT.oneOfType([
    PT.bool,
    PT.number,
  ]),
  showLines: PT.bool,
  lineOffset: PT.number,
  lineOpacity: PT.number,
  lineStrokeDasharray: PT.string,
  backgroundFill: PT.string,
  backgroundStroke: PT.string,
  backgroundStrokeWidth: PT.number,
  seriesBlendMode: PT.string,
  labelWidth: PT.number,
};
const defaultProps = {
  name: '',
  axesSeriesIndex: 0,
  showLines: true,
  lineOffset: 0,
  lineOpacity: 0.25,
  lineStrokeDasharray: '5',
  backgroundFill: 'none',
  backgroundStroke: 'rgba(0, 0, 0, 0.2)',
  backgroundStrokeWidth: 1,
  seriesBlendMode: 'multiply',
  labelWidth: 80,
};


const RadarChart = ({
  name,
  series,
  axesSeriesIndex,
  showLines,
  lineOffset,
  lineOpacity,
  lineStrokeDasharray,
  backgroundFill,
  backgroundStroke,
  backgroundStrokeWidth,
  seriesBlendMode,
  labelWidth,
}) => {
  const padding = {
    top: labelWidth,
    bottom: labelWidth,
    left: labelWidth,
    right: labelWidth,
  };
  return (
    <RadarChartWrap>
      {name && <Name>{name}</Name>}
      <ResizeDetector handleWidth handleHeight>
        {({ width = 0, height = 0 }) => (
          <Inner>
            {width && (
              <>
                <Svg
                  width={width}
                  height={height}
                  padding={padding}
                  series={series}
                  axesSeriesIndex={axesSeriesIndex}
                  showLines={showLines}
                  lineOffset={lineOffset}
                  lineOpacity={lineOpacity}
                  lineStrokeDasharray={lineStrokeDasharray}
                  backgroundFill={backgroundFill}
                  backgroundStroke={backgroundStroke}
                  backgroundStrokeWidth={backgroundStrokeWidth}
                  seriesBlendMode={seriesBlendMode}
                />
                <LabelsHtml
                  radius={width / 2}
                  labelWidth={labelWidth}
                  labels={series[axesSeriesIndex].axes.map((axis) => axis.name)}
                />
              </>
            )}
          </Inner>
        )}
      </ResizeDetector>
    </RadarChartWrap>
  );
};
RadarChart.propTypes = propTypes;
RadarChart.defaultProps = defaultProps;
export default RadarChart;


const absCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const RadarChartWrap = styled.div`
  ${absCss};
`;
const Name = styled.p``;
const Inner = styled.div`
  position: relative;
`;
