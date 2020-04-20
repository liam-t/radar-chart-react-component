/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';
// import Labels from './Labels';
import Lines from './Lines';
import { getAngleSliceRadians } from './helpers';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  radius: PT.number.isRequired,
  showLines: PT.bool.isRequired,
  lineOffset: PT.number.isRequired,
  lineOpacity: PT.number.isRequired,
  lineStrokeDasharray: PT.string.isRequired,
};
const defaultProps = {};

const Axes = ({
  axes,
  radius,
  showLines,
  lineOffset,
  lineOpacity,
  lineStrokeDasharray,
}) => {
  const angleSliceRadians = getAngleSliceRadians(axes.length);
  const sharedProps = {
    axes,
    angleSliceRadians,
    radius,
  };
  return (
    <AxesWrap>
      {/* <Labels {...sharedProps} /> */}
      {showLines && (
        <Lines
          {...sharedProps}
          lineOffset={lineOffset}
          opacity={lineOpacity}
          strokeDasharray={lineStrokeDasharray}
        />
      )}
    </AxesWrap>
  );
};
Axes.propTypes = propTypes;
Axes.defaultProps = defaultProps;

export default Axes;

const AxesWrap = styled.g``;
