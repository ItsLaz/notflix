import React from 'react';
import { useFetch } from '../hooks/useFetch';
import './Row.css';

// {error && <p className="error">{error}</p>}
// {isPending && <p className="loading">Loading...</p>}
// {data && <MovieCard moviesData={data} />}

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const { data: movies, isPending, error } = useFetch(fetchUrl);

    return (
        <div className="row">
            <h2>{title}</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {movies && (
                <div className="row__posters">
                    {movies.results.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row__poster ${
                                isLargeRow && 'row__posterLarge'
                            }`}
                            src={`${base_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Row;
