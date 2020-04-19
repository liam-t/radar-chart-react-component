/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';
import Labels from './Labels';
import Lines from './Lines';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  radius: PT.number.isRequired,
};
const defaultProps = {};

const Axes = ({ axes, radius }) => {
  const angleSliceRadians = (Math.PI * 2) / axes.length;
  const sharedProps = {
    axes,
    angleSliceRadians,
    radius,
  };
  return (
    <AxesWrap>
      <Labels {...sharedProps} />
      <Lines {...sharedProps} />
    </AxesWrap>
  );
};
Axes.propTypes = propTypes;
Axes.defaultProps = defaultProps;

export default Axes;

const AxesWrap = styled.g``;
