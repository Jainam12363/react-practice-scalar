import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  let [watchlist, setWatchlist] = useState([]); // State to hold the watchlist

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList)) //storing the watchlist in local storage
    setWatchlist(newWatchList);
    console.log(newWatchList);
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie)=>{  //this is the selected movie to be removed
      return movie.id != movieObj.id  //return all movies whose id is not equal to the selected movie id
    })

    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList)) //updating the local storage after removing the movie

    setWatchlist(filteredWatchList);
    console.log(filteredWatchList);
  }



  //to populate watchlist from local storage when the app loads
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem("moviesApp")
    if(!moviesFromLocalStorage){  //if there is no movie in local storage
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner/> <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/></>} />  {/* two seperate components are created for movies and banner and both are called here in Movies page */}
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
