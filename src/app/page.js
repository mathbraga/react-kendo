'use client';

import { useState, useEffect } from 'react';
import { TracksGrid } from '@/components/TracksGrid';
import createTracksDTO from '@/utils/createTracksDTO';
import Image from 'next/image';

const fetchData = async (stateUpdater) => {
  try {
    const response = await fetch('/api/tracks');
    if (!response.ok) {
      throw new Error('Something went wrong with the local api.');
    }
    const jsonData = await response.json();
    const tracksDTO = createTracksDTO(jsonData.tracks.track);
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
      <div className='text-3xl font-bold mt-[8%] text-center'>
        Top 120 tracks
      </div>
      <div className='flex flex-col items-center justify-center mt-16 mb-8'>
        {tracks ? (
          <div className='w-full md:w-10/12 xl:w-9/12'>
            <TracksGrid height='493px' tracks={tracks} />
          </div>
        ) : (
          <Image
            src='/loading.gif'
            alt='Loading...'
            width={40}
            height={40}
            unoptimized
          />
        )}
      </div>
    </main>
  );
}
