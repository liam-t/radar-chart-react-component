import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components/macro';
import serieDef from 'models/serie';
import ResizeDetector from 'react-resize-detector';
import Svg from './Svg';

const propTypes = {
  name: PT.string,
  series: PT.arrayOf(serieDef).isRequired,
  axesSeriesIndex: PT.oneOfType([
    PT.bool,
    PT.number,
  ]),
};
const defaultProps = {
  name: '',
  axesSeriesIndex: 0,
};

const RadarChart = ({
  name,
  series,
  axesSeriesIndex,
}) => {
  return (
    <RadarChartWrap>
      {name && <Name>{name}</Name>}
      <ResizeDetector handleWidth handleHeight>
        {({ width, height }) => (
          <Inner>
            {width && (
              <Svg
                width={width}
                height={height}
                series={series}
                axesSeriesIndex={axesSeriesIndex}
              />
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
const Inner = styled.div``;
