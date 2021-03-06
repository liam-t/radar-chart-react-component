import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import axisDef from 'models/axis';
import { getXY } from './helpers';

const propTypes = {
  axes: PT.arrayOf(axisDef).isRequired,
  angleSliceRadians: PT.number.isRequired,
  radius: PT.number.isRequired,
};
const defaultProps = {};


const Labels = ({ axes, angleSliceRadians, radius }) => {
  return (
    <LabelsWrap transform={`translate(${radius} ${radius})`}>
      {axes.map(({ name }, i) => {
        const [x, y] = getXY(radius, angleSliceRadians * i);
        const getTextAnchor = () => {
          const xPos = x + radius;
          if (xPos === radius) return 'middle';
          if (xPos > radius) return 'end';
          return 'start';
        };
        const getDominantBaseline = () => {
          const yPos = y + radius;
          if (yPos < radius * 0.2) return 'hanging';
          if (yPos > radius * 1.8) return 'no-change';
          return 'middle';
        };
        return (
          <LabelOuter key={name}>
            <Text
              x={x}
              y={y}
              textAnchor={getTextAnchor()}
              dominantBaseline={getDominantBaseline()}
            >
              {name}
            </Text>
          </LabelOuter>
        );
      })}
    </LabelsWrap>
  );
};
Labels.propTypes = propTypes;
Labels.defaultProps = defaultProps;

export default Labels;

const LabelsWrap = styled.g``;
const LabelOuter = styled.g``;
const Text = styled.text``;
