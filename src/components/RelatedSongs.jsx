import SongBar from './SongBar';
import { useSelector } from 'react-redux';

// import { useNavigate } from 'react-router-dom';
const RelatedSongs = ({ data, isPlaying, activeSong, artistId, handlePauseClick, handlePlayClick}) => {

  // const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const navigate = useNavigate();

  return (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white animate-slowfade duration-75 shadow-sm">Related Songs</h1>

    <div className="mt-6 w-full flex flex-col animate-slideup duration-100">
  {data?.map((song, i) => (
    <div key={`${song.key}-${artistId}`} className="hover:drop-shadow-2xl">
      <SongBar
        key={`${song.key}-${artistId}`}
        song={song}
        i={i}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        data={data}
      />
    </div>
  ))}
</div>
  </div>
);
};

// onClick={() => navigate(`/songs/${data?.id}`)}

export default RelatedSongs;
