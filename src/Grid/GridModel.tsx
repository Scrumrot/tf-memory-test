import { List, Map, Record } from 'immutable';
import * as React from "react";
import {arrayFromNumber, getRandomInt} from '../utils';
import GridModelType from './Types/GridModelType';
import GridTileType from './Types/GridTileType';
import TileModel from './TileModel';


const GridModelDefault = Record({
    activeNumber: 1;
    numberOfTiles: 30;
    numberOfUseableTiles: 3,
    tiles: new Map(),
  });

const getUniqueIndexes = (numberOfUseableTiles: number, numberOfTiles: number) : number[] => {
    return arrayFromNumber(numberOfUseableTiles).reduce((allNumbs, curNumb) => {
        const getUniqueNumb = () => {
            const numb = getRandomInt(numberOfTiles - 1);
            if (!!allNumbs.find(val => val === numb)) {
                getUniqueNumb();
            }
            else {return numb;}
        };
        return [...allNumbs, getUniqueNumb()];
    }, []);
};
class GridModel extends GridModelDefault implements GridModelType {
    activeNumber: number;
    numberOfTiles: number;
    numberOfUseableTiles: number,
    tiles: Map<number, GridTileType>;
  
  
  getSetupData({numberOfUseableTiles = 3, numberOfTiles = 30, tiles: new Map()} : {numberOfUseableTiles: number, numberOfTiles: number, tiles: any}) {
    const targets = getUniqueIndexes(numberOfUseableTiles, numberOfTiles);
    const data = arrayFromNumber(numberOfTiles).reduce((all, cur) => {
            const uniqueIndex = getUniqueIndex(numberOfTiles, all);
            
            }, []);
        
        
  }
  setInitData() {
    let tiles = new Map();
    numberOfUseableTiles
    const targets = getUniqueIndexes(this.numberOfUseableTiles, this.numberOfTiles);
    const tilesData = arrayFromNumber(this.numberOfTiles).forEach((id) => {
       const _number = targets.findIndex((ind) => ind === id);
       const number = _number === -1 ? undefined : _number;
       tiles.set(
        id,
        new TileModel({
            id,
            number,
            flipped: !!number,
            setActiveNumber: () => 
        })
       )
    })
    return super.set('tiles', tiles);
  }
  
}

export default GridModel