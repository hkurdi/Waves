
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';


const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    if(isFetching) return <Loader title="Loading top artists.." />;

    if(error) return <Error />;

    return (
        <div className="flex flex-col animate-slidedown duration-100">
            <h2 style={{textShadow: '1px 1px 2px rgba(37, 42, 39, 0.2)'}} className="font-bold text-3xl text-left text-white mt-4 mb-10 shadow-sm"> Discover Top Artists </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
            </div>
        </div>
    );
}


export default TopArtists;
