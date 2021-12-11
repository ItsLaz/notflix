import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import profileAvatar from '../assets/Netflix-avatar.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div>
            <nav className={`navbar__container ${show && 'nav__black'}`}>
                <div className="navbar__left-container">
                    <figure className="logo__wrapper">
                        <Link to="/" className="logo__anchor">
                            <img
                                className="logo__img"
                                src="https://fontmeme.com/permalink/211127/a952d596ae5f420bb28fd8dda8fbed29.png"
                                alt="site logo"
                            />
                        </Link>
                    </figure>
                    <ul className="navbar__list">
                        <li className="navbar__link">
                            <Link to="/" className="navbar__link--anchor">
                                Home
                            </Link>
                        </li>
                        <li className="navbar__link">
                            <Link
                                to="/browse/series"
                                className="navbar__link--anchor"
                            >
                                TV Shows
                            </Link>
                        </li>
                        <li className="navbar__link">
                            <Link
                                to="/browse/movies"
                                className="navbar__link--anchor"
                            >
                                Movies
                            </Link>
                        </li>
                        <li className="navbar__link">
                            <Link to="/latest" className="navbar__link--anchor">
                                New & Popular
                            </Link>
                        </li>
                        <li className="navbar__link">
                            <Link
                                to="/my-list"
                                className="navbar__link--anchor"
                            >
                                My List
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__right-container">
                    <ul className="navbar__list">
                        <li className="navbar__link">
                            <form>
                                <input
                                    type="search"
                                    id="movie-input"
                                    required
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="search--icon icon"
                                />
                            </form>
                        </li>
                        <li className="navbar__link">
                            <Link to="/" className="navbar__link--anchor">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faBell}
                                />
                            </Link>
                        </li>
                        <li className="navbar__link">
                            <Link to="/" className="navbar__link--anchor">
                                <img
                                    className="profile__avatar"
                                    src={profileAvatar}
                                    alt="profile avatar"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
