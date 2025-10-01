import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='h-[40vh] w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}>


      <div className='absolute bottom-0 left-0 right-0 text-white text-xl p-2 text-center bg-gray-900/60 rounded-b-xl'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard