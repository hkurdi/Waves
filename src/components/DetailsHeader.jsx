
import { Link } from 'react-router-dom';

const DetailsHeader = ( { artistId, artistData, songData } ) => {
  const artistInfo = artistData?.attributes;

return (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-gray-900 sm:h-48 h-28 rounded-l-full opacity-60"/>
    <div className="absolute inset-0 flex items-center">
      <img
      alt="alt"
      src={artistId ? artistInfo.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-lg shadow-black"
      />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white animate-slideleft duration-500">{artistId ? artistInfo?.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-100 mt-2 animate-slideleft duration-700">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-base text-gray-100 mt-2 animate-slideleft duration-700">{artistId ? artistInfo?.genreNames[0] : songData?.genres?.primary}</p>
      
      </div>
    </div>
  </div>
);
}
export default DetailsHeader;
