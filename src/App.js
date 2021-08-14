import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
  padding: 1vh;
  border-radius: 25px;
  max-width: 90vw;
  background-color: #181a1b;
  color: #d0ccc5;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        setCharacters(res.data);

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv className="Characters">
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </StyledDiv>
    </div>
  );
};

export default App;
//