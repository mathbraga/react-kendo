import { TrackUrlCell } from './TrackUrlCell';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useState } from 'react';

const initialDataConstraints = {
  sort: [{ field: 'listeners', dir: 'desc' }],
  filter: {
    logic: 'and',
    filters: [
      {
        field: 'name',
        operator: 'contains',
        value: '',
      },
    ],
  },
  take: 10,
  skip: 0,
};

export const TracksGrid = (props) => {
  const { tracks } = props;
  const [dataConstraints, setDataConstraints] = useState(
    initialDataConstraints
  );
  const [dataResult, setDataResult] = useState(
    process(tracks, dataConstraints)
  );

  const onDataConstraintsChange = (e) => {
    setDataConstraints(e.dataState);
    setDataResult(process(tracks, e.dataState));
  };

  return (
    <Grid
      style={{
        height: props.height,
      }}
      data={dataResult}
      filterable={true}
      sortable={true}
      pageable={true}
      {...dataConstraints}
      onDataStateChange={onDataConstraintsChange}
    >
      <GridColumn field='name' title='Track' />
      <GridColumn field='artist' title='Artist' />
      <GridColumn
        field='listeners'
        title='Listeners'
        width='120px'
        filterable={false}
      />
      <GridColumn
        field='url'
        title='Last.fm'
        width='80px'
        cell={TrackUrlCell}
        filterable={false}
        sortable={false}
      />
    </Grid>
  );
};
