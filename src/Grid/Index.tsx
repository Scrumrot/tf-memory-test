import * as React from "react";
import GridModel from './GridModel';
import GridType from './Types/GridType';
import GridTileType from './Types/GridTileType';
function arrayFromNumber(length): number[] {
  return [...Array(length).keys()];
}

function getGridStyle(length: number): string => {
  return arrayFromNumber(length).reduce((all, cur)=> `${all} 1fr` , '');
}

function getInitGridData(length: number): string => {
  return arrayFromNumber(length).reduce((all, cur)=> `${all} 1fr` , '');
}
// GridTileType
const Grid = (props: GridType) => {
    const { columns = 5, rows = 5, gap = '10px', numberOfUseableTiles = 3, activeNumber = 0 } = props;
    const numberOfTiles = rows * columns;
    const [gridData, setGridData] = React.useState(new GridModel({ activeNumber, numberOfTiles, numberOfUseableTiles }).setInitData());
    
    const numberOfTiles = arrayFromNumber(rows * columns)
    const gridTemplateColumns = getGridStyle(columns);
    const gridTemplateRows = getGridStyle(rows);
    return (
      <div className="tf-grid" style={{gridTemplateColumns, gridTemplateRows}}>
        
          
      </div>
    );
};
