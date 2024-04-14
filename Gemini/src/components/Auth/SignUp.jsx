import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Assuming your firebase.js is in the same directory
import "./SignUp.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null); // Add state for error message
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validate user input (optional)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', userCredential.user);
            // Handle successful signup (e.g., redirect to home page)
            navigate('/HomePage'); // Redirect to homepage after successful sign-in
        } catch (error) {
            console.error('Error creating user:', error.message);
            setError(error.message); // Set error message
        }
    };

    return (
        <div className="SignUp-container">
            <div className="SignUp-content">
                <h1 className="SignUp-title">Sign Up</h1>
                <form className="SignUp-form" onSubmit={handleSignUp}>
                    <div className="form-box">
                        <label className="SignUp-label" htmlFor="firstName">First Name:</label>
                        <input type="text" className="SignUp-input" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-box">
                        <label className="SignUp-label" htmlFor="lastName">Last Name:</label>
                        <input type="text" className="SignUp-input" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-box">
                        <label className="SignUp-label" htmlFor="email">Email:</label>
                        <input type="email" className="SignUp-input" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-box">
                        <label className="SignUp-label" htmlFor="password">Password:</label>
                        <input type="password" className="SignUp-input" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-box">
                        <label className="SignUp-label" htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" className="SignUp-input" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>} {/* Display error message if present */}
                    <button type="submit" className="SignUp-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp