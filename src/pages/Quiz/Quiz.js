import React, { useEffect } from 'react';

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {

    useEffect(() => {
        console.log(questions)
    }, [questions])

    return (
        <div>
            quiz
        </div>
    );
}

export default Quiz;
