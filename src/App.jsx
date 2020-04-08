import React from 'react';
import styled from 'styled-components';
import Graph1 from './components/Graph1.jsx';
import data from './data/data.json';

function App() {
  return (
    <AppWrap>
      <Graph1 data={data} />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div``;
