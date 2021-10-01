import React from 'react';
import Carrousel from './components/Carrousel'
import './App.css';
import '../src/styles/styles.css'
import styled from 'styled-components';

function App() {
  return (
    <main>
      <Titulo> PRODUCTOS DESTACADOS </Titulo>
      <Carrousel />
    </main>
  );
}


const Titulo = styled.p `
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px
`;
export default App;
