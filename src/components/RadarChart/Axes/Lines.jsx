import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  angleSliceRadians: PT.number.isRequired,
  radius: PT.number.isRequired,
};
const defaultProps = {};

const Lines = ({ axes, angleSliceRadians, radius }) => {
  return (
    <LinesWrap />
  );
};
Lines.propTypes = propTypes;
Lines.defaultProps = defaultProps;

export default Lines;

const LinesWrap = styled.g``;
