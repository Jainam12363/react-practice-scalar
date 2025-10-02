import React, { useEffect, useState } from 'react'

import genreid from '../Utility/genre'
import genreids from '../Utility/genre'

function WatchList({watchlist, setWatchlist, handleRemoveFromWatchlist}) {

  const[search, setSearch]= useState('')
  const[genreList, setGenreList]= useState(['All Genres']) //to keep track of all genres present in the watchlist
  const[currGenre, setCurrGenre]= useState('All Genres') //to keep track of the currently selected genre

  let handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  //function to handle genre filter
  let handleFilter=(genre)=>{
    setCurrGenre(genre)
  }


  // This function sorts the 'watchlist' array in increasing order based on the 'vote_average' property of each movie.
  // It uses the Array.sort() method, which mutates the original array.
  let sortIncreasing=()=>{
    let sortedIncreasing= watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
   })

   setWatchlist([...sortedIncreasing])  //to re-render the component after sorting
  }

  let sortDecreasing=()=>{  
    let sortedDecreasing= watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
   })

   setWatchlist([...sortedDecreasing])  //to re-render the component after sorting
  }



  //same sorting function can be used for popularity also

  let sortPopIncreasing=()=>{
    let sortedPopIncreasing= watchlist.sort((movieA, movieB)=>{
      return movieA.popularity - movieB.popularity
   })

   setWatchlist([...sortedPopIncreasing])  //to re-render the component after sorting
  }

  let sortPopDecreasing=()=>{  
    let sortedPopDecreasing= watchlist.sort((movieA, movieB)=>{
      return movieB.popularity - movieA.popularity
   })

   setWatchlist([...sortedPopDecreasing])  //to re-render the component after sorting
  }


  //useEffect hook for genre filter
  useEffect(()=>{
    let temp= watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp= new Set(temp)  //to remove duplicates . this makes sure that each genre appears only once in the top 
    setGenreList(['All Genres', ...(temp)])  //it will show all genres and the rest too
    // console.log(temp)
  }, [watchlist])  //whenever watchlist changes, this useEffect will run


  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4 cursor-pointer' : 'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4 cursor-pointer'}>{genre}</div>
      })}
      {/* <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4'>Action</div> */}
    </div>

    {/* this is for search bar */}
      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' type='text' placeholder='Search for movies'/>
      </div>

      {/* this is for table */}
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-1'>
            <tr>
              <th className='w-[40%]'>Name</th>
              <th className='w-[15%]'>
                <div className='flex jusify-center items-center '>
                  <div onClick={sortIncreasing} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
                  <div className='p-2'>Ratings</div>
                  <div onClick={sortDecreasing} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div>
                </div>              
              </th>
              
              
              <th className='w-[15%]'>
                <div className='flex jusify-center items-center '>
                  <div onClick={sortPopIncreasing} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
                  <div className='p-2'>Popularity</div>
                  <div onClick={sortPopDecreasing} className='p-2 cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div>
                </div>              
              </th>

              
              <th className='w-[15%]'>Genre</th>
              <th className='w-[15%]'></th>
            </tr>

          </thead>

          <tbody>


            {/* here 1st filter() is used to filter the movies based on genre so that when any genre is seelected at top it will display movies of only that genre below */}
            {/* here 2nd filter() is used to filter the movies based on search input */}

            {watchlist.filter((movieObj)=>{
              if(currGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre  //if the genre of the movie matches the currently selected genre, it will be displayed 
              }
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLowerCase())  //if the movie name includes the search input, it will be displayed
            }).map((movieObj)=>{
              return <tr className='border-b-1'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[7rem] w-[9rem]' src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} />
                <div className='mx-10'>{movieObj.title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreid[movieObj.genre_ids[0]]}</td>

              <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className='text-red-800 cursor-pointer hover:text-blue-500'>Delete</td>
            </tr>
            })}





            

            

          </tbody>
        </table>
      </div>
    </>
    
  )
}

export default WatchList