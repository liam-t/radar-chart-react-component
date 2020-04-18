import React from 'react';
import styled from 'styled-components';
import Graph1 from './components/Graph1.jsx';

function App() {
  const data = {};
  return (
    <AppWrap>
      <Graph1 data={data} />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div``;
