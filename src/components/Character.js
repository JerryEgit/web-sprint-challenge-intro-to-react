// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.h1``;

const StyledDiv = styled.div`
  padding: 8px;
  border: 5px;
  border-radius: 25px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: gray;
    transform: scale(1.1);
    color: black;
    font-weight: bold;
  }
`;

export default function Character({ character }) {
  console.log(character);

  return (
    <StyledDiv>
      <StyledChar>{character.name}</StyledChar>
      <h2>Details: </h2>
      <p>Gender: {character.gender} </p>
      <p>Eye color: {character.eye_color}</p>
      <p>Mass: {character.mass} </p>
      <p>Hair color: {character.hair_color}</p>
      <p>Skin color: {character.skin_color}</p>
      <p>Birth year: {character.birth_year}</p>
    </StyledDiv>
  );
}