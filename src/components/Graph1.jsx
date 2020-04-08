import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const propTypes = {};

const Graph1 = () => {
  return (
    <Graph1Wrap>
      <p>Hi i&apos;m Graph1!</p>
    </Graph1Wrap>
  );
};
Graph1.propTypes = propTypes;

export default Graph1;

const Graph1Wrap = styled.div``;
