import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// {error && <p className="error">{error}</p>}
// {isPending && <p className="loading">Loading...</p>}
// {data && <MovieCard moviesData={data} />}

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const { data: movies, isPending, error } = useFetch(fetchUrl);
    const [trailerUrl, setTrailerUrl] = useState('');

    const opts = {
        height: '550',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

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
                            onClick={() => handleClick(movie)}
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
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
