import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useEffect } from 'react';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCoreApi';

const SongDetails = () => {

    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({songid});
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
      
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data, i}))
        dispatch(playPause(true));
      };



    if(isFetchingSongDetails || isFetchingRelatedSongs) return 
    <Loader title="Searching for song details.." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData}/> 
            <div className="mb-10">
            <div style={{ margin: '16px' }} />
                <h2 className="text-white text-3xl font-bold animate-slidedown duration-75">Lyrics</h2>

                <div className="mt-5 animate-slideup duration-700">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (
                        <p className="text-white font-medium text-base my-1 shadow-sm hover:drop-shadow-2xl">{line}</p>
                    )) : <p className="text-white font-medium text-base my-1 shadow-sm hover:drop-shadow-2xl"> Sorry, no lyrics found. </p>
                    }
                </div>
                <div className="w-full sm:h-44 h-24"/>
            </div>
            <RelatedSongs 
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}

            />
        </div>
    );
}

export default SongDetails;
