import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const propTypes = {};
const defaultProps = {};

const Boilerplate = () => {
  return (
    <BoilerplateWrap>
      <p>Hi i&apos;m Boilerplate!</p>
    </BoilerplateWrap>
  );
}
Boilerplate.propTypes = propTypes;
Boilerplate.defaultProps = defaultProps;

export default Boilerplate;

const BoilerplateWrap = styled.div``;
