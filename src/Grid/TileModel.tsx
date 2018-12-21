import * as React from 'react';
import { Record } from 'immutable';
import GridTileType from './Types/GridTileType';



const TileModelDefault = {
    id: null,
    number: undefined,
    flipped: false,
    setActiveNumber: _ => _,
};

export default class TileModel extends Record<GridTileType>(TileModelDefault) {
  id: number;
  number: number;
  flipped: boolean;
  setActiveNumber: Function;
  setFlipped: Function;

  constructor(props: GridTileType) {
    super(props);
  }
  
}