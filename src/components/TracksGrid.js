import { TrackUrlCell } from './TrackUrlCell';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { useState } from 'react';

const initialFilter = {
  logic: 'and',
  filters: [
    {
      field: 'name',
      operator: 'contains',
      value: '',
    },
  ],
};

export const TracksGrid = (props) => {
  const { tracks } = props;
  const [filter, setFilter] = useState(initialFilter);

  return (
    <Grid
      style={{
        height: 'auto',
      }}
      data={filterBy(tracks, filter)}
      filterable={true}
      filter={filter}
      onFilterChange={(e) => setFilter(e.filter)}
    >
      <GridColumn field='name' title='Track' />
      <GridColumn field='artist' title='Artist' />
      <GridColumn
        field='listeners'
        title='Listeners'
        width='100px'
        filterable={false}
      />
      <GridColumn
        field='url'
        title='Last.fm'
        width='80px'
        cell={TrackUrlCell}
        filterable={false}
      />
    </Grid>
  );
};
