import { List, Map, Record } from 'immutable';
// import * as React from "react";
import { arrayFromNumber, getRandomInt } from '../utils';
import GridModelType from './Types/GridModelType';
import GridTileType from './Types/GridTileType';
import TileModel from './TileModel';

const defTile = new TileModel({
  id: 0,
  number: undefined,
  flipped: false,
  setActiveNumber: _ => _,
});

// const GridModelDefault = Record({
//     activeNumber: 1;
//     numberOfTiles: 30;
//     numberOfUseableTiles: 3,
//     tiles: new Map(),
//   });

const GridModelDefault = {
  activeNumber: 0,
  numberOfTiles: 25,
  numberOfUseableTiles: 3,
  tiles: new Map(),
  failed: false,
};

const getUniqueIndexes = (
  numberOfUseableTiles: number,
  numberOfTiles: number,
): number[] => {
  return arrayFromNumber(numberOfUseableTiles).reduce((allNumbs, curNumb) => {
    const getUniqueNumb = () => {
      const numb = getRandomInt(numberOfTiles - 1);
      if (!!allNumbs.find(val => val === numb)) {
        return getUniqueNumb();
      } else {
        return numb;
      }
    };
    return [...allNumbs, getUniqueNumb()];
  }, []);
};
class GridModel extends Record<GridModelType>({
  activeNumber: 0,
  numberOfTiles: 30,
  numberOfUseableTiles: 3,
  tiles: new Map(),
  failed: false,
}) {
  // activeNumber: number;
  // numberOfTiles: number;
  // numberOfUseableTiles: number;
  // tiles: Map<number, GridTileType>;

  updateData = (id: number) => {
    const activeNumber = super.get('activeNumber');
    const tile = super.tiles.get(id);
    const isActive = !!tile.number;
    const shouldFlip =
      !tile.flipped && isActive && activeNumber + 1 === tile.number;
    const newTile = shouldFlip ? tile.set('flipped', true) : tile;
    return shouldFlip && !tile.flipped
      ? super
          .setIn(['tiles', tile.id], super.tiles.get(id).set('flipped', true))
          .set('activeNumber', activeNumber + 1)
      : super.set('failed', true);
  };
  setInitData = () => {
    const targets = getUniqueIndexes(
      this.numberOfUseableTiles,
      this.numberOfTiles,
    );
    console.log('this.numberOfUseableTiles', this.numberOfUseableTiles);
    console.log('this.numberOfTiles', this.numberOfTiles);
    console.log('targets', targets);
    const tilesData = arrayFromNumber(this.numberOfTiles).reduce(
      (allTiles, id) => {
        const _allTiles = allTiles === null ? new Map() : allTiles;
        const _number = targets.findIndex(ind => ind === id);
        const number = _number === -1 ? undefined : _number;
        return _allTiles.set(
          id,
          new TileModel({
            id,
            number,
            flipped: number || number === 0 ? true : false,
            setActiveNumber: id => this.updateData(id),
          }),
        );
      },
      null,
    );
    // const things = super.set('tiles', tiles);
    console.log('tilesData.tiles !!!', this.set('tiles', tilesData).toJS());
    return super.set('tiles', tilesData);
  };
}

export default GridModel;
