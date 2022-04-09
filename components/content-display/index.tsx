import React from 'react';
import TableView from './table-view';
import TileView from './tile-view';

const ContentDisplay = ({ tileView }: { tileView: boolean }) => {
  return <div>{tileView ? <TileView /> : <TableView />}</div>;
};

export default ContentDisplay;
