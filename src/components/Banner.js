import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import './Banner.css';

function Banner({ fetchUrl }) {
    const { data: movies, isPending, error } = useFetch(fetchUrl);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        if (movies) {
            setMovie(
                movies.results[
                    Math.floor(Math.random() * movies.results.length - 1)
                ]
            );
        }
    }, [movies]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading....</p>}
            {movie && (
                <header
                    className="banner"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className="banner__contents">
                        <h1 className="banner__title">
                            {movie?.title ||
                                movie?.name ||
                                movie?.original_name}
                        </h1>
                        <div className="banner__buttons">
                            <button className="banner__button">Play</button>
                            <button className="banner__button">My List</button>
                        </div>

                        <h1 className="banner__desc">
                            {truncate(movie?.overview, 150)}
                        </h1>
                    </div>
                    <div className="banner--fadeBottom" />
                </header>
            )}
        </>
    );
}

export default Banner;
