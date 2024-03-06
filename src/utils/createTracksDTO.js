export default function createTracksDTO(tracksData) {
  const tracks = tracksData.tracks.track;
  const tracksDTO = tracks.map((track) => ({
    name: track.name,
    artist: track.artist.name,
    listeners: track.listeners,
    url: track.url,
  }));

  return tracksDTO;
}
