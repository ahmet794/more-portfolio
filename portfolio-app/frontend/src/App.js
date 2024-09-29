import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css'; // Main CSS
import PortfolioDashboard from './components/PortfolioDashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="main-content">
                    <Routes>
                        {/* Landing Page with Login */}
                        <Route
                            path="/"
                            element={
                                <>
                                    {/* Landing Page Section */}
                                    <div className="about-section">
                                        <h1>Welcome to More-Portfolio</h1>
                                        <p>
                                            More-Portfolio offers cutting-edge portfolio management strategies that combine the latest in financial theory with the power of modern applications. Manage your investments, track performance, and make data-driven decisions all in one place.
                                        </p>
                                    </div>

                                    {/* Login Section */}
                                    <div className="login-section">
                                        <Login />
                                    </div>
                                </>
                            }
                        />
                        {/* Dashboard Page */}
                        <Route path="/dashboard" element={<PortfolioDashboard />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
