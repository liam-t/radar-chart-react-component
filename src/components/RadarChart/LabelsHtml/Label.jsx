import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';

const propTypes = {
  text: PT.string.isRequired,
  width: PT.number.isRequired,
  xPercentageOffset: PT.number.isRequired,
  yPercentageOffset: PT.number.isRequired,
};
const defaultProps = {};

const Label = ({
  text,
  width,
  xPercentageOffset: x,
  yPercentageOffset: y,
}) => {
  let transX = '-50%';
  let transY = '-50%';
  let justifyContent = 'center';
  let alignItems = 'center';
  if (x < 30) {
    transX = '-100%';
    justifyContent = 'flex-end';
  }
  if (x > 70) {
    transX = '0';
    justifyContent = 'flex-start';
  }
  if (y < 30) {
    transY = '-100%';
    alignItems = 'flex-end';
  }
  if (y > 70) {
    transY = '0';
    alignItems = 'flex-start';
  }

  return (
    <LabelWrap
      width={width}
      xPercentageOffset={x}
      yPercentageOffset={y}
      translate={`${transX}, ${transY}`}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      <Text>{text}</Text>
    </LabelWrap>
  );
};
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;

const LabelWrap = styled.div.attrs(({
  justifyContent,
  alignItems,
  width,
  xPercentageOffset,
  yPercentageOffset,
  translate,
}) => ({
  style: {
    justifyContent,
    alignItems,
    width: `${width}px`,
    height: `${width}px`,
    left: `${xPercentageOffset}%`,
    top: `${yPercentageOffset}%`,
    transform: `translate(${translate})`,
  },
}))`
  position: absolute;
  display: flex;
`;

const Text = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 0.5em;
  hyphens: auto;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: center;
`;
