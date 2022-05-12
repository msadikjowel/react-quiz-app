import { Button, MenuItem, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../Data/Categories';
import './Home.css'

const Home = ({ name, setName, fetchQuestions }) => {
    // state

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    const handleStartQuiz = () => {
        if (!name || !category || !difficulty) {
            setError(true);
            return;
        }
        else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate('/quiz');
            console.log(category, difficulty, name)
        }
    }


    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className="settings_select">

                    {error && <Alert severity="error" style={{ marginBottom: 25 }}>Please fill up all the fields!</Alert>
                    }

                    <TextField
                        label='Enter Your Name' variant='outlined'
                        style={{ marginBottom: 25 }}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        select
                        label="Select Category"
                        variant='outlined'
                        style={{ marginBottom: 25 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                        select
                        label="Select Difficulty"
                        variant='outlined'
                        style={{ marginBottom: 25 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>

                    </TextField>

                    <Button variant="contained" color="primary" size="large" className='btn'
                        onClick={handleStartQuiz}
                    >Start Quiz</Button>

                </div>

            </div>

            <img src='./quiz.svg' alt='quiz' className='banner' />
        </div>
    );
}

export default Home;
