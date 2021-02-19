import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;

const BASE_URL = `https://api.themoviedb.org/3/movie/`;

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(BASE_URL + id + API_KEY);
        const newMovie = await res.json();
        setMovie(newMovie);
      } catch (e) {
        console.error(e);
      }
    };
    getMovie();
  }, [id]);

  if (!movie.title) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul>
        {movie.genres.map(({ name, id }) => (
          <li key={id}> {name}</li>
        ))}
      </ul>
    </div>
  );
}
