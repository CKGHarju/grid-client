import React from 'react';
import styled from 'styled-components';

const Favourites = props => <FavouritesButton>Favourites</FavouritesButton>;

const FavouritesButton = styled.button`
  color: red;
  width: 80px;
  height: 60px;
  border: none;
  cursor: pointer;
  text-align: center;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background-color: #000;
  font-size: 0.7em;
`;

export default Favourites;
