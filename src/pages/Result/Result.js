import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css'

const Result = ({ score, name }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!name) {
            navigate('/');
        }
    }, [name, navigate]);

    return (
        <div className='result'>
            <span className='title'>Final score: {score}</span>

            <Button
                variant='contained'
                color='secondary'
                href="/"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
            >Go to Homepage</Button>
        </div>
    );
}

export default Result;
