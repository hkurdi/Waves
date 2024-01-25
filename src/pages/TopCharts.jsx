import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';


const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();


    if(isFetching) return <Loader title="Loading top charts.." />;

    if(error) return <Error />;

    return (
        <div className="flex flex-col animate-slidedown duration-100">
            <h2 style={{textShadow: '1px 1px 2px rgba(37, 42, 39, 0.2)'}} className="font-bold text-3xl text-left text-white mt-4 mb-10 shadow-sm"> Discover Top Charts </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
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
}


export default TopCharts;
