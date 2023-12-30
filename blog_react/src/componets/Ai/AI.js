import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../App.css";

const Ai = () => {
    const [loadingMessage, setLoadingMessage] = useState('');
    const [typedMessage, setTypedMessage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);


    
    useEffect(() => {
        const typingInterval = 50;

        if (currentIndex < loadingMessage.length) {
            const timer = setInterval(() => {
                setTypedMessage((prevMessage) => prevMessage + loadingMessage[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, typingInterval);

            return () => clearInterval(timer);
        }
    }, [currentIndex, loadingMessage]);

    const handleSubmit = () => {
        setLoading(true);

        axios.post("http://127.0.0.1:8000/api/chat", { message: userInput })
            .then(function (response) {
                if (response.data) {
                    setLoadingMessage(response.data.message);
                    setUserInput('');
                    setTypedMessage('');
                    setCurrentIndex(0);
                }
            })
            .catch(function (error) {
                console.error(error.message);
                // Display an error message to the user on the UI
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <div>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="search-container">
                            <input type="text" name='search' className="search-bar" placeholder="Type your search..." onChange={(e) => setUserInput(e.target.value)} />
                            <button className="btn btn-primary submit-button" onClick={handleSubmit}>Search</button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="result-container">
                        {loading ? (
                                <div className="loader">Loading...</div>
                            ) : (
                                <pre>
                                    <p className="result-text">{typedMessage}</p>
                                </pre>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Ai;
