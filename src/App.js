import './App.css';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import requests from './requests';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <Banner fetchUrl={requests.fetchTrending} />
                <Row
                    title="NETFLIX ORIGINALS"
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                />
                <Row title="Trending" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                    title="Action Movies"
                    fetchUrl={requests.fetchActionMovies}
                />
                <Row
                    title="Comedy Movies"
                    fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                    title="Horror Movies"
                    fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                    title="Documentaries"
                    fetchUrl={requests.fetchDocumentaries}
                />
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
