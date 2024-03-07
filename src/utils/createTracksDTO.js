export default function createTracksDTO(tracksData) {
  const tracksDTO = tracksData.map((track) => ({
    name: track.name,
    artist: track.artist.name,
    listeners: parseInt(track.listeners),
    url: track.url,
  }));

  return tracksDTO;
}
