import React from 'react';
import PortfolioList from './components/PortfolioList';  // Import your component
import Navbar from './components/Navbar';
import Login from './components/Login';


function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <div className="about-section">
                    <h1>Welcome to More-Portfolio</h1>
                    <p>Your investment portfolio managed with cutting-edge strategies.</p>
                </div>
                <Login />
            </div>
        </div>
    );
}

export default App;
