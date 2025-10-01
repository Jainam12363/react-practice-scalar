import React from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Movies() {

  const[movies,setMovies]=useState([])

  /*
  This component fetches popular movies from The Movie Database (TMDB) API.
  - The API link was copied from the TMDB website's API documentation for "Get Popular Movies".
  - When the API call runs, it returns a JSON object. The actual list of movies is inside res.data.results.
  - Each movie object in results has details like 'original_title' (movie name) and 'poster_path' (image path).
  - We use these fields to show the movie name and poster in the MovieCard component.
  - The useEffect hook makes sure the API call runs only once when the component loads.
*/

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=637f2224b0a97ab00c296240dabc3898&language=en-US&page=1').then((res)=>{ //this api is from themoviedb 
      console.log(res.data.results)
      setMovies(res.data.results) 
    })
  },[])

  return (
    <div className='p-5'>
        <div className='text-2xl font-bold text-center'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-8'>
            

            {movies.map((movieObj)=>{
              return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
            })}
            


        </div>
    </div>
  )
}

export default Movies


// https://api.themoviedb.org/3/movie/popular?api_key=637f2224b0a97ab00c296240dabc3898&language=en-US&page=1