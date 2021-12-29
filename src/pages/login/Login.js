import { useState } from 'react';
import './Login.css';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="container">
            <img
                className="logo__img--signup"
                src="https://fontmeme.com/permalink/211127/a952d596ae5f420bb28fd8dda8fbed29.png"
                alt="site logo"
            />
            <div className="form__container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2 className="form-title">Login</h2>
                    <div className="input-group">
                        <label>
                            <span className="label">Email</span>
                            <input
                                className="input"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </label>
                    </div>
                    <div className="input-group">
                        <label>
                            <span className="label">Password</span>
                            <input
                                className="input"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </label>
                    </div>
                    {!isPending && <button className="btn">Login</button>}
                    {isPending && (
                        <button disabled className="btn">
                            loading...
                        </button>
                    )}
                    <p className="signup__text">
                        New to Netflix?{' '}
                        <Link to="/signup" className="signup">
                            <span>Sign up now</span>
                        </Link>
                    </p>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
}
