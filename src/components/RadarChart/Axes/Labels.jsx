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


const getXY = (r, radians) => {
  const rads = radians + Math.PI / 2;
  return [
    -r * Math.cos(rads),
    -r * Math.sin(rads),
  ];
};


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
          if (yPos < radius * 0.1) return 'hanging';
          if (yPos > radius * 1.9) return 'no-change';
          return 'middle';
        };
        return (
          <LabelOuter key={name}>
            <text
              x={x}
              y={y}
              textAnchor={getTextAnchor()}
              dominantBaseline={getDominantBaseline()}
            >
              {name}
            </text>
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
