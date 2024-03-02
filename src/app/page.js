'use client';

import products from './fakeData.json';
import { useState } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-react-data-tools';

const initialSort = [
  {
    field: 'UnitPrice',
    dir: 'asc',
  },
];

export default function Home() {
  const [sort, setSort] = useState(initialSort);

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='w-9/12'>
        <Grid
          style={{
            height: '400px',
          }}
          data={orderBy(products, sort)}
          sortable={true}
          sort={sort}
          onSortChange={(e) => setSort(e.sort)}
        >
          <GridColumn field='ProductID' title='ID' width='40px' />
          <GridColumn field='ProductName' title='Name' width='250px' />
          <GridColumn field='Category.CategoryName' title='CategoryName' />
          <GridColumn field='UnitPrice' title='Price' />
          <GridColumn field='UnitsInStock' title='In stock' />
        </Grid>
      </div>
    </main>
  );
}
