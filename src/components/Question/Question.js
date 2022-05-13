import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css'

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    score,
    setScore,
    correct,
}) => {

    let navigate = useNavigate();

    const [selected, setSelected] = useState();
    const [error, setError] = useState();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select';
        }
        else if (selected === i && selected !== correct) {
            return 'wrong';
        }
        else if (i === correct) {
            return 'select';
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false)
    };

    const handleQuit = () => {

    };

    const handleNext = () => {
        if (currQues > 8) {
            navigate('/result');
        }
        else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        }
        else {
            setError(true);
        }
    };

    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>

            <div className="singleQuestion">
                <h2>{questions[currQues].question}</h2>

                <div className="options">
                    {error && <Alert severity="error" style={{ marginBottom: 25 }}>Please select an option first!</Alert>
                    }

                    {
                        options && options.map((i) => (
                            <button
                                key={i}
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${selected && handleSelect(i)}`}
                                disabled={selected}
                            >{i}
                            </button>
                        ))}
                </div>

                <div className="controls">
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        style={{ width: 185 }}
                        href='/'
                        onClick={handleQuit}
                    >Quit</Button>

                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >Next Question</Button>
                </div>

            </div>
        </div>
    );
}

export default Question;
