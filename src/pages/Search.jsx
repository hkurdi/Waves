import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCoreApi';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);
  console.log(data);
  console.log(songs);

  if (isFetching) return <Loader title="Searching.." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col animate-slidedown duration-100">
      <h2 style={{ textShadow: '1px 1px 2px rgba(37, 42, 39, 0.2)' }} className="font-bold text-3xl text-left text-white mt-4 mb-10 shadow-sm"> Showing results for <span style={{ color: 'white', textShadow: '1px 1px 2px rgba(91, 121, 104, 0.3)' }}>{searchTerm}</span> </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;