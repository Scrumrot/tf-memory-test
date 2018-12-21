import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridModel from './GridModel';
import Tile from './Tile';
import GridType from './Types/GridType';
import GridTileType from './Types/GridTileType';

function arrayFromNumber(length): number[] {
  return [...Array(length).keys()];
}

function getGridStyle(length: number): string {
  return arrayFromNumber(length).reduce((all, cur) => `${all} 1fr`, '');
}

function getInitGridData(length: number): string {
  return arrayFromNumber(length).reduce((all, cur) => `${all} 1fr`, '');
}
// GridTileType

export default class Grid extends Component<GridType> {
  static propTypes = {
    columns: PropTypes.number,
    rows: PropTypes.number,
    numberOfUseableTiles: PropTypes.number,
    activeNumber: PropTypes.number,
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    columns: 5,
    rows: 5,
    numberOfUseableTiles: 3,
    activeNumber: 0,
    gap: '10px',
  };
  state = {
    grid: new GridModel({
      activeNumber: this.props.activeNumber,
      numberOfTiles: this.props.rows * this.props.columns,
      numberOfUseableTiles: this.props.numberOfUseableTiles,
    }).setInitData(),
  };
  // componentDidMount() {
  //   const { rows, columns, numberOfUseableTiles, activeNumber } = this.props;
  //   const numberOfTiles = rows * columns;
  //   this.setState(() => ({
  //     grid: new GridModel({
  //       activeNumber,
  //       numberOfTiles,
  //       numberOfUseableTiles,
  //     }).setInitData(),
  //   }));
  // }
  render() {
    const { rows, columns, gap } = this.props;
    const gridColumnGap = gap;
    const gridRowGap = gap;
    const gridTemplateColumns = getGridStyle(columns);
    const gridTemplateRows = getGridStyle(rows);
    // console.log(this.state.grid.setInitData());
    console.log('this.state.grid.tiles', this.state.grid.tiles);
    console.log(
      'this.state.grid.tiles.toArray()',
      this.state.grid.tiles.toArray(),
    );
    console.log('this.state.grid.tiles.toJS()', this.state.grid.tiles.toJS());
    const tilesData = () => {
      const tilesObjData = this.state.grid.tiles.toJS();
      const theReturn = Object.keys(tilesObjData).map(
        tileId => tilesObjData[tileId],
      );
      console.log('theReturn', theReturn);
      return theReturn;
    };
    return (
      <div
        className="tf-grid"
        style={{
          height: '75vh',
          gridTemplateColumns,
          gridTemplateRows,
          gridColumnGap,
          gridRowGap,
        }}
      >
        {tilesData().map(tile => {
          // console.log('tile.toJS()', tile);
          return <Tile key={tile.id} {...tile} />;
        })}
      </div>
    );
  }
}
