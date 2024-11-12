import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/home.css';

const Home = () => {
//useState to manage the state of our response
    const [name, setName] = useState('');

    useEffect(() => {
        // Fetch the name from the backend using Axios
        axios.get('http://localhost:5000/api/')
            .then(response => {
                // Update the name in the state
                setName(response.data.name);
            })
            .catch(error => {
                console.error('Error fetching name:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs once on component mount

    return (
        <div className='name'>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default Home;