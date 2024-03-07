import createTracksDTO from './createTracksDTO.js';

const mockData = [
  {
    name: 'track1',
    artist: { name: 'artist1', tracks: 99, link: 'someurl' },
    listeners: '9999',
    url: 'someurl',
    clicks: '9999',
    year: '2001',
    thumbnail: 'someurl',
  },
];

const tracksDTO = createTracksDTO(mockData);

describe('tracks DTO', () => {
  it('should return the listeners field as a number', () => {
    const listeners = tracksDTO[0].listeners;

    expect(typeof listeners).toEqual('number');
  });

  it('should return a DTO with only necessary fields', () => {
    const tracksDTO = createTracksDTO(mockData);

    expect(tracksDTO).toEqual([
      {
        name: 'track1',
        artist: 'artist1',
        listeners: 9999,
        url: 'someurl',
      },
    ]);
  });
});
