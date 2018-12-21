import { Map } from 'immutable';
import GridTileType from './GridTileType';
export default interface GridModelType {
  activeNumber: number;
  numberOfTiles: number;
  numberOfUseableTiles: number;
  tiles: Map<number, GridTileType>;
  failed: boolean;
}
