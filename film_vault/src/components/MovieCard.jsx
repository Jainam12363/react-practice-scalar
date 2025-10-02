import React from "react";

function MovieCard({ movieObj,  poster_path,  name,  handleAddtoWatchlist,  handleRemoveFromWatchlist,  watchlist}) {
  //function to check if the movie is already in the watchlist
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div 
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="absolute top-2 right-2 flex justify-center items-center rounded-lg h-8 w-8 bg-gray-900/60 text-white text-lg"
        >
          &#10060; {/* code for cross mark emoji */}
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="absolute top-2 right-2 flex justify-center items-center rounded-lg h-8 w-8 bg-gray-900/60 text-white text-lg"
        >
          &#128525; {/* code for heart eyes emoji */}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 text-white text-xl p-2 text-center bg-gray-900/60 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
