'use client';

import { useState, useEffect } from 'react';
import { TracksGrid } from '@/components/TracksGrid';
import createTracksDTO from '@/utils/createTracksDTO';

const fetchData = async (stateUpdater) => {
  try {
    const response = await fetch('/api/tracks');
    if (!response.ok) {
      throw new Error('Something went wrong with the local api.');
    }
    const jsonData = await response.json();
    const tracksDTO = createTracksDTO(jsonData);
    stateUpdater(tracksDTO);
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetchData(setTracks);
  }, []);

  return (
    <main>
      <div className='flex flex-col items-center justify-center mt-20 mb-8'>
        <div className='text-3xl font-bold my-4'>Top 120 tracks</div>
        {tracks && ( //TODO suspense
          <div className='w-10/12'>
            <TracksGrid tracks={tracks} />
          </div>
        )}
      </div>
    </main>
  );
}
