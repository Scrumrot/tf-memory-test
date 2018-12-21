import GridTileType from './GridTileType';

export default interface GridType {
  columns: number;
  rows: number;
  numberOfUseableTiles: number;
  activeNumber: number;
  gap: number | string;
}
