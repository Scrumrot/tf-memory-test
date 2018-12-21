import * as React from 'react';
import GridTileType from './Types/GridTileType';

const getInnerCN = (_active: boolean, _flipped: boolean): string => {
  const active = _active ? ` active` : '';
  const flipped = _flipped ? ` flipped` : '';
  return `tf-inner-tile${active}${flipped}`;
};

const Tile = (props: GridTileType) => {
  const { id, number, flipped } = props;
  // console.log('props', props);
  const _number = number || number === 0 ? true : false;
  return (
    <div className="tf-grid-tile" id={`${id}`}>
      <div className={getInnerCN(_number, flipped)}>
        <div className="tf-flip-card-front">
          <strong className="tf-tile-number">{number}</strong>
        </div>
        <div className="tf-flip-card-back" />
      </div>
    </div>
  );
};
export default Tile;
