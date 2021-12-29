import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
    const { authIsReady, user } = useAuthContext();

    return (
        <div className="app">
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        {user && <Route path="/" element={<Home />} />}
                        {!user && (
                            <Route
                                path="/"
                                element={<Navigate replace to="/signup" />}
                            />
                        )}
                        {!user && <Route path="/login" element={<Login />} />}
                        {user && (
                            <Route
                                path="/login"
                                element={<Navigate replace to="/" />}
                            />
                        )}
                        {!user && <Route path="/signup" element={<Signup />} />}
                        {user && (
                            <Route
                                path="/signup"
                                element={<Navigate replace to="/" />}
                            />
                        )}
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;
