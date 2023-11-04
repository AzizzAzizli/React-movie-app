import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";
export const MovieCard = (props) => {
  // console.log(props.data.Poster);
  const [favMovies, setFavMovies] = useState([]);
  const [fav, setFav] = useState(false);
  console.log(fav);
  console.log(favMovies);
  function uppercase(name) {
    return name.split("")[0].toUpperCase() + name.slice(1);
  }

  function handleFav(id) {
    if (fav === false) {
      setFav(true);
      setFavMovies((prev) => {
        const newFavMovie = props.movies.find((item) => item.imdbID === id);
        // console.log( newFavMovie);
        return [newFavMovie, ...prev];
      });
    } else {
      setFav(false);
    }
    console.log(id);
  }


  return (
    <div className="myCard  rounded-3 overflow-hidden text-light">
      <img
        style={{ height: "450px", width: "350px" }}
        className=" object-fit-cover"
        src={
          props.data.Poster !== "N/A"
            ? props.data.Poster
            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.59acm7M8zfvbkDUNHr6KdQAAAA%26pid%3DApi&f=1&ipt=95d1559f051f40cd5dc53cdf16e1cf1c508e36121ccb0e77b340cd253c2fe542&ipo=images"
        }
        alt=""
      />
      <div className=" bg-black p-3 ">
        <p> Title: {props.data.Title}</p>
        <p> Type: {props.data.Year}</p>
        <p> Year: {uppercase(props.data.Type)}</p>
        <button
          className={`btn btn-${fav ? "danger" : "success"}`}
          onClick={() => handleFav(props.data.imdbID)}
        >
          {fav ? "Remove " : "Add "}Fav
        </button>
      </div>
    </div>
  );
};
