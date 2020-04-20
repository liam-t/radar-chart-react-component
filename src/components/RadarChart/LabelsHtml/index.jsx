import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import Label from './Label';
import { getXY, getAngleSliceRadians } from '../Axes/helpers';

const propTypes = {
  radius: PT.number.isRequired,
  labelWidth: PT.number.isRequired,
  labels: PT.arrayOf(PT.string).isRequired,
};
const defaultProps = {};

const LabelsHtml = ({ radius, labelWidth, labels }) => {
  const containerDiameter = radius * 2;
  const angleSliceRadians = getAngleSliceRadians(labels.length);
  return (
    <LabelsHtmlWrap>
      {labels.map((label, i) => {
        const xy = getXY(radius - labelWidth, angleSliceRadians * i);
        const [xPercentageOffset, yPercentageOffset] = xy.map((coord) => (
          ((coord + radius) / containerDiameter) * 100
        ));
        return (
          <Label
            key={label}
            width={labelWidth}
            text={label}
            xPercentageOffset={xPercentageOffset}
            yPercentageOffset={yPercentageOffset}
          />
        );
      })}
    </LabelsHtmlWrap>
  );
};
LabelsHtml.propTypes = propTypes;
LabelsHtml.defaultProps = defaultProps;

export default LabelsHtml;

const LabelsHtmlWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;
