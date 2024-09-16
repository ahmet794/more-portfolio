import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PortfolioList() {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/portfolios')
            .then(response => {
                setPortfolios(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the portfolios!", error);
            });
    }, []);

    return (
        <div>
            <h1>Portfolios</h1>
            <ul>
                {portfolios.map(portfolio => (
                    <li key={portfolio.id}>{portfolio.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PortfolioList;