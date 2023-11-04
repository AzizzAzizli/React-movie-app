import React, {  useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieCard } from "../../components/moviecard/MovieCard";
import "./Home.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  let searchInput = useRef();


 function handleInput() {
    let value = searchInput.current.value;
    console.log(value);
    const data = getMovies(value);
    setMovies(data);
    searchInput.current.value = "";
    searchInput.current.focus();
    console.log(movies);
  }

  function getMovies(title) {
    const url = `http://www.omdbapi.com/?apikey=a407a7b3&s=${title}`;

    axios({ method: "GET", url }).then((res) => {
     
      const resData = res.data.Search;

      console.log(resData);

      setMovies(resData);
    });
  }
function a(){
  setTimeout(() =>{
  return <h1 className=" fw-bold text-warning">Not found...</h1>
  },500)
}
  return (
    <div className="  d-flex flex-column gap-5 align-items-center row pt-5">
      <h1 className="fw-bold text-center text-primary">Movie app</h1>
      <div className="d-flex justify-content-center gap-3 col-xl-5 col-lg-7 col-sm-9 col-11">
        <input ref={searchInput} placeholder="Search" type="search" className="movieInput" />
        <button onClick={handleInput} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="d-flex flex-wrap gap-3 w-100 justify-content-center align-items-center container">
        {movies?movies.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie}  movies={movies}/>
        )): a()}
      </div>
    </div>
  );
};
