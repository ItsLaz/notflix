import { useState } from 'react';
import './Signup.css';
import { useSignup } from '../../hooks/useSignup';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, isPending, error } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(displayName, email, password);
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
                    <h2 className="form-title">Signup</h2>
                    <div className="input-group">
                        <label>
                            <span className="label">Display Name</span>
                            <input
                                className="input"
                                type="text"
                                onChange={(e) => setDisplayName(e.target.value)}
                                value={displayName}
                            />
                        </label>
                    </div>
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
                                placeholder="atleast 6 characters"
                            />
                        </label>
                    </div>
                    {!isPending && <button className="btn">Signup</button>}
                    {isPending && (
                        <button className="btn" disabled>
                            Loading...
                        </button>
                    )}
                    <p className="signup__text">
                        Already have an account?{' '}
                        <Link to="/login" className="signup">
                            <span>Sign in here</span>
                        </Link>
                    </p>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
}
