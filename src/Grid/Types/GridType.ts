import GridTileType from './GridTileType';

export default interface GridType {
  columns: number;
  rows: number;
  numberOfTiles: number;
  gap: number | string;
}
