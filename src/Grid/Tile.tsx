import * as React from "react";
import GridTileType from './Types/GridTileType';

const getInnerCN = (_active: boolean, _flipped: boolean): string => {
    const active = _active ? ` active` : '';
    const flipped = _flipped ? ` flipped` : '';
    return `tf-inner-tile${active}${flipped}`;
;

const Tile = (props: GridTileType) => {
    const {id, number, flipped} = props;
    return (
      <div className="tf-grid-tile" id={`${id}`}>
        <div
          className={getInnerCN(!!number, flipped)}
        >
          <div className="tf-flip-card-front">
            <strong className="tf-tile-number">{number}</strong>
          </div>
          <div className="tf-flip-card-back"/>
        </div>
      </div>
    );
};


export default Tile